import React from 'react'
import axios from 'axios';



import '../Home/css/style.css'
import '../Home/js/app'

import sweetOneImg from './img/mainSlider.jpg'

function AdminDashboard() {


    const [posts, setPosts] = React.useState([]);
    const [newposts, setNewPosts] = React.useState([]);
    const [total,setTotal] = React.useState();

    // React.useEffect(() => {
    //     axios.get(`http://localhost:5000/profile`)
    //         .then(res => {
    //             console.log("response", res.data.profile.name);

    //             setNewPosts(res.data.profile.name)
               
    //         });


    // }, [total]);





   

 

  

   



  
   
   



    


    return (
        <div>

          

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
                        <div className="col-lg-8">
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                       
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-page-inner">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="coupon">
                                            <input type="text" placeholder="Coupon Code" />
                                            <button>Apply Code</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="cart-summary">
                                            <div className="cart-content">
                                                {/* <h1>Cart Summary</h1> */}
                                                {/* <h2>Grand Total :
                                                     <span ></span></h2> */}
                                            </div>
                                            <div className="cart-btn" >
                                               


                                                <button >Checkout</button>
                                            </div>
                                  
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

export default AdminDashboard;