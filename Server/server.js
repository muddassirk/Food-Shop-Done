var express = require('express');
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-inzi');
var path = require('path')
var http = require("http");
var SERVER_SECRET = process.env.SECRET || "1234";


var app = express()
    // var server = http.createServer(app);


// var { userModel } = require("./dbrepo/index.js")
var { userModel , cartModel } = require('./dbrepo/index')
var authRoutes = require("./auth/auth")

console.log("userModel ====", userModel);


var app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin: http://localhost:3000");
    res.header("Access-Control-Allow-Credentials: true");
    res.header("Access-Control-Allow-Methods: GET, POST");
    res.header("Access-Control-Allow-Headers: Content-Type, *");
    next();

    
})

// function cors()
// {
//     $domains = ['http://localhost:8080'];

//     if (isset($_SERVER['HTTP_ORIGIN'])) {
//         $origin = $_SERVER['HTTP_ORIGIN'];
//         if (in_array($origin, $domains)) {
//             header('Access-Control-Allow-Origin: ' . $origin);
//             header('Access-Control-Allow-Headers : Origin, Content-Type, Authorization');
//         }
//     }
// }



app.use("/", express.static(path.resolve(path.join(__dirname, "../web/build"))));
app.use("/auth", authRoutes)


app.use(function(req, res, next) {
    console.log("req.cookies: ", req.cookies)
    console.log("cookies: ");



    if (!req.cookies.jToken) {
        res.status(401).send("include http-only credentials with every request")
        return;
    }


    jwt.verify(req.cookies.jToken, SERVER_SECRET, function(err, decodedData) {
        if (!err) {
            const issueDate = decodedData.iat * 1000;
            const nowDate = new Date().getTime();
            const diff = nowDate - issueDate;

            if (diff > 300000) {
                res.status(401).send("token expired")
            } else {
                var token = jwt.sign({
                    id: decodedData.id,
                    name: decodedData.name,
                    email: decodedData.email,
                    phone: decodedData.phone,
                }, SERVER_SECRET)
                res.cookie('jToken', token, {
                    maxAge: 86_400_000,
                    httpOnly: true
                });
                req.body.jToken = decodedData
                next();

            }

        } else(
            res.status(401).send("Invalid Token")
        )
    })

})



app.get("/profile", (req, res, next) => {
    console.log(req.body)

    userModel.findById(req.body.jToken.id, 'name email role createdOn',
        function(err, doc) {
            if (!err) {
                res.send({
                    profile: doc

                })
            } else {
                res.status(500).send({
                    message: "server error"
                })
            }
        })
})



app.post("/aboutCart", (req, res, next) => {

    if (!req.body.grandTotal,!req.body.address,!req.body.phone,!req.body.review ) {
        res.status(409).send(`
            Please send tweet in json body
            e.g:
            "products" : "xxxxxx",
            "grandTotal" : "xxxxxx",
            "address" : "xxxxxx",
            "phone" : "xxxxxx",
            "review" : "xxxxxx"
        `)

        return;
    };
    userModel.findById(req.body.jToken.id, 'name email ',
        (err, user) => {
            if (!err) {
                console.log("Car user : " + user);
                cartModel.create({
                    email: user.email,
                    name: user.name,
                    products: req.body.products,
                    grandTotal: req.body.grandTotal,
                    address: req.body.address,
                    phone: req.body.phone,
                    review: req.body.review,
                }).then((data) => {
                    console.log("order in process: " + data),
                        res.status(200).send({
                            message: "order in process",
                            name: user.name,
                            email: user.email,
                        });
                    // io.emit("NEW_POST", { data: data, profileUrl: user.profileUrl });
                }).catch((err) => {
                    res.status(500).send({
                        message: "an error occured : " + err,
                    });
                });
            } else {
                res.status.send({
                    message: "an error occured" + err,
                })
            }
        })
});



app.get("/getOrders", (req, res, next) => {

    cartModel.find({}, (err, data) => {
        if (!err) {
            // console.log("data is orders = > " , data);
            res.status(200).send({
                orders: data,
            });
        }
        else {
            console.log("error : ", err);
            res.status(500).send("error");
        }
    })
});







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})