import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';

class Session extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            id_session:""
        }
        
        this.handleIdSessionChange = this.handleIdSessionChange.bind(this);
    }


    componentDidMount(){
        
        console.log(this.props.link);
        this.setState({isLoading:true});
    }

    handleIdSessionChange = (event) => {
        this.setState({ id_session: event.target.value });
    }
    SaveData = () => {
        localStorage.setItem("id session", this.state.id_session);
        window.location= "/traitement"
    }
    render(){
        const { isLoading,id_session} = this.state;
        return(
            <>
            {isLoading ?
            <>
            <TopBar/>
            <Sidebar/>
            <div class="content-wrapper">
           
                
                <div className="traitement-container-s">
                    
                <label>Id Session : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input value={id_session} class="input" type="number" placeholder="Votre id de session ..." onChange={this.handleIdSessionChange}/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>

                <label>Date début : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="date"/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>

                <label>Date fin : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="date" />
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                    
                    <div class="session-btn">
                    <Button variant="contained" color="primary" onClick={this.SaveData}>Ajouter encore</Button>
                    </div>

            
            </div>
            </div>
            </>
            
            :null
            }
            </>
        );
    }

}
export default Session;