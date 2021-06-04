import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from './TopBar';
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        }
        

    }
    componentDidMount(){
        console.log(this.props.link);
        this.setState({isLoading:true});
    }
    render(){
        const { isLoading } = this.state;
        return(
            <>
            {isLoading ?
            <>
            
            <div class="content">
            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                <div className="card">
                <div className="close-card">
                    <i className="fas fa-times-circle"></i>
                </div>
                    <Link className="card-home-link" to="/gestion-session">Gestion session</Link>
                    <Link className="card-home-link" to="/gestion-actifs">Gestion des actifs</Link>
                    <Link className="card-home-link" to="/gestion-vulnerabilite">Gestion vulnérabilité</Link>
                    <Link className="card-home-link" to="/gestion-menaces">Gestion des menaces</Link>
                    <Link className="card-home-link" to="/gestion-impacts">Gestion des impacts</Link>
                    <Link className="card-home-link" to="/gestion-mesures">Gestion des mesures</Link>
                </div>
                
            </div>
            {/*<Link to="/" className="back">
                <i class="fas fa-arrow-circle-left"></i>
            </Link>*/}
            </>
            
            :null
            }
            </>
        );
    }

}
export default Home;