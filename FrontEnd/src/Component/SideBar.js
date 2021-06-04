import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from './TopBar';
class Sidebar extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            gestion_names : [],
            gestion_links : []
        }
    
    

    }
    componentDidMount(){
        let gestion_names = ['Gestion Session','Gestion des actifs','Gestion de vulnérabilité',
                    'Gestion des menaces','Gestion des impacts','Gestion des mesures'];
        let gestion_links =['gestion-session','gestion-actifs','gestion-vulnerabilite',
                            'gestion-menaces','gestion-impacts','gestion-mesures'];

        
        this.setState({isLoading:true,gestion_names:gestion_names,gestion_links:gestion_links});
    }
    render(){
        const { isLoading , gestion_links , gestion_names } = this.state;
        return(
            <>
            {isLoading ?
            
            <aside class="main-sidebar sidebar-dark-primary">
    
    <a href="index3.html" class="brand-link">
      <img src="img/logo.png" alt="AdminLTE Logo" class="brand-image" />
      <span class="brand-text font-weight-light">SNDP Agil</span>
    </a>

    
    <div class="sidebar">
      
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="img/profile-pic.png" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
          <a href="#" class="d-block">
            {
              localStorage.getItem('nom') ? localStorage.getItem('nom'):"nom"}
              {localStorage.getItem('prenom') ? " "+ localStorage.getItem('prenom'):"prenom"
            }
          </a>
        </div>
      </div>

     

      
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li class="nav-item menu-open">
            
            <ul class="nav nav-treeview">
                
              <li class="nav-item">
                <Link to="/gestion-session" className="nav-link">
                  
                  <p>Gestion session</p>
                </Link>
              </li>
              
              <li class="nav-item">
                <Link to="/gestion-actifs" className="nav-link">
                  
                  <p>Gestion des actifs</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/gestion-vulnerabilite" className="nav-link">
                  
                  <p>Gestion des vulnérabilité</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/gestion-menaces" className="nav-link">
                  
                  <p>Gestion de menaces</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/gestion-impacts" className="nav-link">
                  
                  <p>Gestion des impacts</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="gestion-mesures" className="nav-link">
                  
                  <p>Gestion des mesures</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/traitement" className="nav-link">
                  
                  <p>Traitement</p>
                </Link>
              </li>
            </ul>
          </li>
          </ul>
      </nav>
      
    </div>
    
  </aside>
            
            :null
            }
            </>
        );
    }

}
export default Sidebar;