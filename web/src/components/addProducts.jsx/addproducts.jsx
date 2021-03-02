import React from 'react'
import axios from 'axios';



import '../Home/css/style.css'
import '../Home/js/app'


import { useGlobalState } from "../../context/globelContext"

function AddProducts() {



    const [newposts, setNewPosts] = React.useState([]);
    const [userName, setuserName] = React.useState();


    const globalState = useGlobalState()


    React.useEffect(() => {
        setuserName(globalState.role)
        console.log("user", globalState.role);


        // axios.get(`http://localhost:5000/getOrders`)
        //     .then(res => {
        //         console.log("response", res);

        //     });



    }, []);



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

                          
                            <form>
                                <div class="form-group row">
                                    <label for="name" class="col-sm-2 col-form-label">Product Name</label>
                                    <div class="col-sm-10">
                                        <input type="name" class="form-control" id="name" placeholder="Enter Product Name" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="price" class="col-sm-2 col-form-label">Price</label>
                                    <div class="col-sm-10">
                                        <input type="number" class="form-control" id="price" placeholder="Enter product Price" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                <label for="choseFile" class="col-sm-2 col-form-label">Choose File</label>
                                    <div class="col-sm-10">
                                    <input type="file" class="form-control" id="choseFile" placeholder="Choose file" />
                                    
                                    </div>
                                </div>


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