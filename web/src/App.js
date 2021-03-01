import React, { useContext } from "react";
import "./App.css";
// import axios from 'axios'
import axios from "axios";
import { HashRouter as Router, Switch, Link, Route, Redirect, useHistory } from "react-router-dom";
// import React, { useContext } from "react";
// import axios from "axios";


import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Signup from "./components/signup/signup";


import './components/Home/css/style.css'
import './components/Home/js/app'


import Dashboard from "./components/dashboard/dashboard";
import DashboardHome from "./components/Dashboard Home/home";
import AdminDashboard from "./components/adminDash/adminDash";

import { useGlobalState, useGlobalStateUpdate } from "./context/globelContext"



function App() {


  const globalstate = useGlobalState()
  const setGlobalstate = useGlobalStateUpdate()
  // const history = useHistory()
  const history = useHistory()

  function handleLogout() {
    axios({
      url: "http://localhost:5000/auth/logout",
      method: "POST",
      withCredentials: true
    })
      .then(function (response) {
        console.log("response: ", response.data);
        setGlobalstate(prev => {
          return { ...prev, loginStatus: false, user: null }
        })
        // history.push("/")
        history.push('/login')


      })

  }


  const themeStyles = {
    backgroundColor: globalstate.darkTheme ? "#0D1117" : "#fff",
    color: globalstate.darkTheme ? "#fff" : "#0D1117",
    padding: "10px",
  }

  // const navStyle = {
  //   border: globalstate.darkTheme ? "1px solid white" : "1px solid black",
  //   padding: "10px"

  // }


  return (
    <div style={themeStyles} >
      <Router>
        <div className="top-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <i className="fa fa-envelope"></i>
                        support@email.com
                    </div>
              <div className="col-sm-6">
                {/* <i className="fa fa-moon-o-alt"></i> */}
                {/* Change Mode */}
                <div className='custom-control custom-switch' >
                  <input
                    onClick={() => setGlobalstate(pre => ({ ...pre, darkTheme: !pre.darkTheme }))}
                    type='checkbox'
                    className='custom-control-input'
                    id='customSwitchesChecked'
                    defaultChecked
                  />
                  <label className='custom-control-label' htmlFor='customSwitchesChecked'>

                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="nav container-fluid">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
           <div className="navbar-nav mr-auto">
           <Link to="/" >
               <a className="nav-item nav-link " >Daschboard</a>
           </Link>
           <Link to="/" >
               <a className="nav-item nav-link "  onClick={handleLogout}>Log Out</a>
           </Link>
          
           </div>

           </div> */}

            {(globalstate.role === null) ?

              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto">

                  <Link to="/" >
                    <a className="nav-item nav-link ">Home</a>
                  </Link>
                  <Link to="/login" >
                    <a className="nav-item nav-link " >Login</a>
                  </Link>
                  <Link to="/signup" >
                    <a className="nav-item nav-link " >Signup</a>
                  </Link>

                </div>

              </div>
              : null}

            {(globalstate.role === "admin") ?

              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto">
                  <Link to="/" >
                    <a className="nav-item nav-link " >Admin Daschboard</a>
                  </Link>
                  <Link to="/" >
                    <a className="nav-item nav-link " onClick={handleLogout}>Log Out</a>
                  </Link>

                </div>

              </div>

              : null}


            {(globalstate.role === "user") ?
              <>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div className="navbar-nav mr-auto">
                    <Link to="/" >
                      <a className="nav-item nav-link " >Home</a>
                    </Link>
                    <Link to="/dashboard" >
                      <a className="nav-item nav-link " >Daschboard</a>
                    </Link>
                    <Link to="/" >
                      <a className="nav-item nav-link " onClick={handleLogout}>Log Out</a>
                    </Link>
                  </div>
                </div>
              </>
              : null}






          </nav>

        </div>

        {/* public routes */}
        {( globalstate.role === null ) ?
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
          : null}

        {(globalstate.role === "user") ?

          <>
            <Route exact path="/">
              <DashboardHome />
            </Route>
            <Route  path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
          : null}


        {(globalstate.role === "admin") ?

          <>
            <Route exact path="/">
              <AdminDashboard />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
          : null}





      </Router>
    </div>
  );
}

export default App;
