import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';

import { Afficher_Actifs } from '../../Utils/Affichage';

class GestionActifs extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            actif : [],
            columns : []
        }
    }
    componentDidMount(){
        Afficher_Actifs().then((res) => this.setState({actif:res,isLoading:true})).catch(
            (err) => console.log(err)
        )


        const columns = ['id','id session','description','lieu','proprietaire','type','integrité' , 'disponibilité',
        'confidentialité', ' mesure','valeur'];
        this.setState({columns:columns});
        

    }
    render(){
        const { isLoading, columns,actif } = this.state;
        const x = Object.values(actif);
        let y;
        let k = [];
        x.forEach(element => {
            y = Object.values(element);
            k.push(y);
        });
        //console.log(k);
        //console.log("this is sessions : " ,k);
        return(
            <>
            {isLoading ?
            <>
                                   <TopBar title="Gestion Actifs"/>

            <Sidebar/>
            <div class="content-wrapper">
            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
            <div className="gestion-top">
                                <Link to="/ajouter-actif">Ajouter actif</Link>
                                <Link to="/modifier-actif">Modifer actif</Link>
                            </div>
            
                <div className="gestion-container">
                    
                <div className="data-table-container">
                    <MUIDataTable
                        title={"liste de actif"}
                        data={k}
                        columns={columns}
                        
                    />
                    </div>
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
export default GestionActifs;