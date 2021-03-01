import React, { useState } from 'react'
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import { Redirect } from "react-router-dom"

import sliderOne from "./img/shop2.jpg"

import catagoriOne from "./img/cSlider.jpg"
import catagoriTwo from "./img/bSlider.jpg"

import './home.css'


import './css/style.css'
import './js/app'
// import './js/main'
// import './lib/slick/slick.css'
// import './lib/slick/slick-theme.css'
// import './lib/easing/easing.min.js'
// import './lib/slick/slick.min.js'

function DashboardHome() {



    const [newposts, setNewPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:5000/profile`)
            .then(res => {
                // console.log("response", res);
                console.log("response", res.data.profile.name);

                setNewPosts(res.data.profile.name)
                // .map(obj => obj.data);
                // setPosts(newPosts);
                // console.log(newPosts);
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





            {/* Bottom Bar Start  */}
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
                                {/* <a href="wishlist.html" className="btn wishlist">
                            <i className="fa fa-heart"></i>
                            <span>(0)</span>
                        </a> */}
                                <a href="cart.html" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar End  */}


            {/* Main Slider Start */}

            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">

                            <div className="header-img">
                                <div className="img-item">
                                    <img src={catagoriOne} />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="img-item">
                                    <img src={catagoriTwo} />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="header-slider normal-slider">
                                <div className="header-slider-item">
                                    <img src={sliderOne} width="100%" height='400vh' alt="Slider Image" />
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    <img src={catagoriOne} />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="img-item">
                                    <img src={catagoriTwo} />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Slider End  */}




            {/* Footer Start */}

            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Get in Touch</h2>
                                <div className="contact-info">
                                    <p ><i className="fa fa-map-marker mx-2"></i>123 E Store, Los Angeles, USA</p>
                                    <p><i className="fa fa-envelope mx-2"></i>email@example.com</p>
                                    <p><i className="fa fa-phone mx-2"></i>+123-456-7890</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Follow Us</h2>
                                <div className="contact-info">
                                    <div className="social">
                                        <a className="mx-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="mx-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="mx-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="mx-2" href=""><i className="fab fa-instagram"></i></a>
                                        {/* <a className="mx-2" href=""><i className="fab fa-youtube"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Footer End */}



            {/* Footer Bottom Start */}
            <div className="footer-bottom" style={{ height: "5vh" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright 2021 All Rights Reserved</p>
                        </div>

                        {/* <div className="col-md-6 template-by">
                    <p>Template By <a href="https://htmlcodex.com">HTML Codex</a></p>
                </div> */}
                    </div>
                </div>
            </div>
            {/* Footer Bottom End */}





            {/* Back to Top */}
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>



        </div>
    )

}
export default DashboardHome;;