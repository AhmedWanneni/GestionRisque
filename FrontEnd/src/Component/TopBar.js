import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const TopBar = (props) => {
    
  const history = useHistory();
  let handleLogout = () =>{
      
      localStorage.clear();
      history.push("/");
    }
    
    let isLoading  = true;
        return(
            <>
            {isLoading ?
            <nav class="main-header navbar navbar-expand">
                {/*  Left navbar links */}
                <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">{props.title}</a>
      </li>
    </ul>

    {/* <!-- Right navbar links --> */}
    <ul class="navbar-nav ml-auto">
      {/* <!-- Navbar Search --> */}
      

      {/* <!-- Messages Dropdown Menu --> */}
      
     
      
      <li class="nav-item">
        
      </li>
      <li class="nav-item">
        <button className="logout-btn nav-link"  onClick={handleLogout}>
        <i class="fas fa-sign-out-alt"></i>
        </button>
      </li>
    </ul>
  </nav>
            :null
            }
            </>
        );
    }


export default TopBar;