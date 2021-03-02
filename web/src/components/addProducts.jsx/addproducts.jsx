import React from 'react'
import axios from 'axios';
import { Button} from "react-bootstrap"


import '../Home/css/style.css'
// import '../Home/css/style.css'
import '../Home/js/app'


import { useGlobalState } from "../../context/globelContext"

function AddProducts() {



    const [newposts, setNewPosts] = React.useState([]);
    const [userName, setuserName] = React.useState();


    const globalState = useGlobalState()


    React.useEffect(() => {
        setuserName(globalState.role)
        console.log("user", globalState.role);

    }, []);


    function handleUploadPro(e) {
        e.preventDefault();
        console.log("function running");

        
        let productName = document.getElementById("name").value;
        let productPrice = document.getElementById("price").value.toLowerCase();
        // let choseFile = document.getElementById("choseFile").value;
        var fileInput = document.getElementById("choseFile");
        console.log("imgggg" , fileInput);


        let formData = new FormData();

        formData.append("myFile", fileInput.files[0]);
        formData.append("productName", productName);
        formData.append("productPrice", productPrice);
        


      
        axios({
            method: 'post',
            url: "http://localhost:5000/uploadNewProduct",
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((response) => {
            console.log("response", response);
            alert(response.data.message)

        }, (error) => {
            alert(error.response.data.message)
        }
        )
        document.getElementById('name').value = ""
        document.getElementById('price').value = ""
        document.getElementById('choseFile').value = ""

        return false;

    }






    return (
        <div>
            <div className="nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                {/* <a href="cart.html" className="nav-item nav-link active">Cart</a> */}

                            </div>
                            <div className="navbar-nav ml-auto">
                                <div className="nav-item ">
                                    <a href="#" className="nav-link -toggle" >{userName}</a>
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

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">


                            <form onSubmit={(e)=>(handleUploadPro(e))}>
                                <div className="form-group row">
                                    <label for="name" className="col-sm-3 col-form-label">Product Name</label>
                                    <div className="col-sm-9">
                                        <input type="name" className="form-control" id="name" placeholder="Enter Product Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="price" className="col-sm-3 col-form-label">Price</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" id="price" placeholder="Enter product Price" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="choseFile" className="col-sm-3 col-form-label">Choose File</label>
                                    <div className="col-sm-9">
                                        <input type="file" className="form-control" id="choseFile" placeholder="Choose file" />

                                    </div>
                                </div>

                                <Button className="w-100" type="submit">Add</Button>


                            </form>





                            {/* <div class="custom-file">
                                <input type="file" class="custom-file-input" id="customFile" />
                                <label class="custom-file-label" for="customFile">Choose file</label>
                            </div> */}


                        </div>

                        <div className="col-lg-3"></div>


                    </div>
                </div>
            </div>













            {/* Back to Top */}
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>




        </div>
    )
}

export default AddProducts;