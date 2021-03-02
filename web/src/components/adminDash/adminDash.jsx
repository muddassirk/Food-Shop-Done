import React from 'react'
import axios from 'axios';



import '../Home/css/style.css'
import '../Home/js/app'

import sweetOneImg from './img/mainSlider.jpg'

import { useGlobalState } from "../../context/globelContext"

function AdminDashboard() {



    const [posts, setPosts] = React.useState([]);
    const [newposts, setNewPosts] = React.useState([]);
    const [userName, setuserName] = React.useState();
    const [userProducts, setuserProducts] = React.useState();


    const globalState = useGlobalState()


    React.useEffect(() => {
        setuserName(globalState.role)
        console.log("user", globalState.role);


        axios.get(`http://localhost:5000/getOrders`)
            .then(res => {
                console.log("response", res);
                console.log("response", res.data.orders);
                setNewPosts(res.data.orders)
                console.log(newposts);
                // console.log(newposts);
                // console.log("response", res.data.orders[6]);
                // console.log("response", res.data.orders[6].name);
                // console.log("response", res.data.orders[6].email);
                // console.log("response", res.data.orders[6].address);
                // console.log("response", res.data.orders[6].grandTotal);
                // console.log("response", res.data.orders[6].review);
                // console.log("response", res.data.orders[index).address;
                // console.log("response", res.data.orders[6].products);
                // setuserProducts(res.data.orders[6].products)

            });
        


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

                    </div>
                </div>
            </div>

            <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cart-page-inner">
                                <div className="table-responsive">

                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phon No</th>
                                                <th>Address</th>
                                                <th>Review</th>
                                                <th>Order Date </th>
                                                <th>Grand Total</th>
                                                <th>Products Details
                                                    <br/>
                                                    <small>Name</small>,
                                                    <small>Qty</small>,
                                                    <small>Actual</small>,
                                                    <small>Total</small>
                                                </th>
                                                <th>Accept</th>

                                            </tr>
                                        </thead>

                                        <tbody className="align-middle">

                                            {
                                                newposts.map(({ name, email, phone, review, address, createdOn, grandTotal, products }, index) => {
                                                    return (
                                                        // <div key={index}>
                                                        <tr key={index}>
                                                            <td>{name}</td>
                                                            <td>{email}</td>
                                                            <td>{phone}</td>
                                                            <td>{address}</td>
                                                            <td>{review}</td>
                                                            <td>{createdOn}</td>
                                                            <td>Rs.{grandTotal}</td>

                                                            <td>{
                                                                products.map((value, index) => {
                                                                    return (
                                                                        <div>
                                                                            {console.log('value is', value)}
                                                                            {/* <tr>
                                                                                <th>Name</th>
                                                                                <th>Qty</th>
                                                                                <th>Price</th>
                                                                            </tr> */}
                                                                            <tr>
                                                                                
                                                                                <td>{value.productName}</td>
                                                                                <td>{value.productQTY}</td>
                                                                                <td>Rs.{value.actualPrice}</td>
                                                                                <td>Rs.{value.productPrice}</td>
                                                                            </tr>
                                                                        </div>
                                                                    )
                                                                })

                                                            }</td>
                                                            <td><button><i className="fa fa-plus-circle"></i></button></td>



                                                        </tr>




                                                        // </div>

                                                    )
                                                })
                                            }
                                        </tbody>

                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>













            {/* Back to Top */}
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>




        </div>
    )
}

export default AdminDashboard;