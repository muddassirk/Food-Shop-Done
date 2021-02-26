import React from 'react'
import './dashboard.css';
// import axios from 'axios'
import axios from 'axios';



import './css/style.css'
import './js/app'

import sweetOneImg from './img/mainSlider.jpg'
import sweetTwoImg from './img/four.jpg'
import sweetThreeImg from './img/five.jpg'



function Dashboard() {


    const [posts, setPosts] = React.useState([]);
    const [newposts, setNewPosts] = React.useState([]);
    const [total,setTotal] = React.useState();

    React.useEffect(() => {
        axios.get(`http://localhost:5000/profile`)
            .then(res => {
                // console.log("response", res);
                // console.log("response", res.data.profile.name);

                setNewPosts(res.data.profile.name)
                // .map(obj => obj.data);
                // setPosts(newPosts);
                // console.log(newPosts);
            });


    }, [total]);





    var [products, setProducts] = React.useState([
        {
            productName: "One",
            productPrice: "0",
            productQTY: 0,
            actualPrice : 90,

        },
        {
            productName: "Two",
            productPrice: "0",
            productQTY: 0,
            actualPrice : 90,

        },
        {
            productName: "Three",
            productPrice: "0",
            productQTY: 0,
            actualPrice : 90,
        },

    ])

 

    function addQuantity(index) {
        var old_products = [...products];
        // console.log("old products",  old_products, ' ', index);
        old_products[index].productQTY += 1;
        old_products[index].productPrice = old_products[index].productQTY * old_products[index].actualPrice
        // console.log("old products", old_products[index]);
        setProducts(old_products)
        var myTotal = 0 ;
        products.map(({productPrice},index)=>{

            
                myTotal +=parseInt(productPrice);
            })
            setTotal(myTotal);

    }


    function removeQTY(index) {
        var old_products = [...products]
        old_products[index].productQTY -= 1;
        old_products[index].productPrice = old_products[index].productQTY * old_products[index].actualPrice
        setProducts(old_products)
        var myTotal = 0 ;
        products.map(({productPrice},index)=>{

                myTotal -=parseInt(productPrice);
            })
            setTotal(myTotal);

    }



    var grandttl = React.useRef();
    var addressRef = React.useRef();
    var phoneRef = React.useRef();
    var textAreaRef = React.useRef();

    function handleRewBtn(e){

        axios({
            method: "post",
            url: 'http://localhost:5000/aboutCart',
            data: {
                grandTotal: grandttl.current.innerText,
                address: addressRef.current.value,
                phone: phoneRef.current.value,
                review: textAreaRef.current.value
            },
            withCredentials: true
        })
            .then(function (response) {
                // handle success
                // console.log("response: ", response.status);
                // console.log("response: ", response.message);
                alert(response.data.message)
                // console.log("response: ", response.data.message);
                
            })
            .catch(function (error) {
                // handle error
                console.log("global error: ==== ", error);
                
            })
            grandttl.current.innerText = ""
            addressRef.current.value = ""
            phoneRef.current.value =""
            textAreaRef.current.value = ""

        // console.log("grand total ..... ", grandttl.current.innerText);
        // console.log("grand total ..... ", addressRef.current.value);
        // console.log("grand total ..... ", phoneRef.current.value);
        // console.log("grand total ..... ", textAreaRef.current.value);

    }
    
   



    


    return (
        <div>

            <div className="nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        {/* <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <a href="cart.html" className="nav-item nav-link active">Cart</a>

                            </div>
                            <div className="navbar-nav ml-auto">
                                <div className="nav-item ">
                                    <a href="#" className="nav-link -toggle" >{newposts}</a>
                                    {/* <div className="dropdown-menu">
                                        <a href="login.html" className="dropdown-item">Login & Register</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>


            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <a href="index.html">
                                    {/* <img src="img/logo.png" alt="Logo" /> */}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <a href="#" className="btn wishlist">
                                    <i className="fa fa-heart"></i>
                                    <span>(0)</span>
                                </a>
                                <a href="#" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total </th>
                                                {/* <th>Add</th> */}
                                                {/* <th>Grand Total</th> */}
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">

                                            {products.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="img">
                                                                <a href="#"><img src={sweetOneImg} alt="Image" /></a>
                                                                <p>{value.productName}</p>
                                                            </div>
                                                        </td>
                                                        <td>90</td>
                                                        <td>
                                                            <div className="qty">
                                                                <button onClick={value.productQTY > 0?  (e) => removeQTY(index): ()=>{return} }
                                                             className="btn-minus"><i className="fa fa-minus"></i></button>
                                                             <span 
                                                             style={
                                                                 {display:"inline-block", 
                                                                 backgroundColor: "black",
                                                                 color:"white",
                                                                 width:"25px",
                                                                 height:"5vh",
                                                                 paddingTop: "6px",
                                                                 fontSize:"12px",
                                                                 border:"1px solid black"
                                                                }}
                                                             >
                                                                 {value.productQTY}</span>
                                                            {/* <input  type="text" value={value.porductQTY} id="firstProduct" /> */}
                                                            <button onClick={(e) => addQuantity(index)}
                                                             className="btn-plus"><i className="fa fa-plus"></i></button>
                                                            </div>
                                                        </td>
                                                        <td>{value.productPrice}</td>
                                                        {/* <td><button><i className="fa fa-trash"></i></button></td> */}
                                                        {/* <td><button><i className={value.productQTY>0 ? "fa fa-plus-circle" : 'haha'} onClick={()=>value.productQTY >0 ? addItem(value) : ()=>{return null}} aria-hidden="true"></i></button></td> */}
                                                        {/* <td> {totalQty}</td> */}
                                                    </tr>

                                                   
                                                    
                                                )
                                            })
                                            
                                            }

                                        </tbody>
                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-page-inner">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <div className="coupon">
                                            <input type="text" placeholder="Coupon Code" />
                                            <button>Apply Code</button>
                                        </div> */}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="cart-summary">
                                            <div className="cart-content">
                                                {/* <h1>Cart Summary</h1> */}
                                                <h2>Grand Total :
                                                     <span ref={grandttl}>{total}</span></h2>
                                            </div>
                                            <div className="cart-btn" >
                                               


                                                {/* <button onClick={}>Checkout</button> */}
                                            </div>
                                    {
                                    total>0?

                                    <table className="table table-bordered mt-3" >
                                        <tr className="mt-3"><b>Address</b></tr>
                                        <tr>
                                            <input ref={addressRef}
                                            className="mt-3"
                                            style={{width: "100%",
                                            backgroundColor: "white",
                                            border: "1px solid #DDDDDD",
                                            color:"black"}}
                                            type='text' placeholder="Enter Your Address" /> </tr>


                                        <tr><b>Phon No:</b></tr>
                                        <tr>
                                        <input 
                                        ref={phoneRef}
                                        className="mt-2 mb-2"
                                            style={{width: "100%",
                                            backgroundColor: "white",
                                            border: "1px solid #DDDDDD",
                                            color:"black"}}
                                            type='number' placeholder="Enter Your Phone No" />
                                        </tr>
                                        <tr><b>Review</b></tr>
                                        {/* <tr> */}
                                            <textarea
                                            ref={textAreaRef}
                                            className="mt-3 w-100"
                                            style={{border: "1px solid #DDDDDD"}}
                                            name="Review" id="" cols="30" rows="4" placeholder="Enter your review"></textarea>
                                        {/* </tr> */}
                                        {/* <tr ></tr> */}
                                        <button className="btn-btn-primary w-100" onClick={(e)=>handleRewBtn(e)}>Submit</button>
                                    </table>
                                    :null
                                }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Get in Touch</h2>
                                <div className="contact-info">
                                    <p><i className="fa fa-map-marker"></i>123 E Store, Los Angeles, USA</p>
                                    <p><i className="fa fa-envelope"></i>email@example.com</p>
                                    <p><i className="fa fa-phone"></i>+123-456-7890</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Follow Us</h2>
                                <div className="contact-info">
                                    <div className="social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Start */}
            <div className="footer-bottom" style={{ height: "5vh" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright 2021 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom End */}





            {/* Back to Top */}
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>




        </div>
    )
}

export default Dashboard;