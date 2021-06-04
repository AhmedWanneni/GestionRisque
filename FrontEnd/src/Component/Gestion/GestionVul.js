import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';


import { Afficher_Vulnerabilite } from '../../Utils/Affichage';
export default class GestionVul extends Component {



    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            vulnerabilite: [],
            columns: []
        }
    }
    componentDidMount() {
        Afficher_Vulnerabilite().then((res) => this.setState({ vulnerabilite: res, isLoading: true })).catch(
            (err) => console.log(err)
        )


        const columns = ['id', 'id actif','description', 'type', 'valeur'];
        this.setState({ columns: columns });


    }
    render() {
        const { isLoading, columns, vulnerabilite } = this.state;
        const x = Object.values(vulnerabilite);
        let y;
        let k = [];
        x.forEach(element => {
            y = Object.values(element);
            k.push(y);
        });
        console.log(k);
        console.log("this is sessions : ", k);
        return (
            <>
                {isLoading ?
                    <>
                        <TopBar title="Gestion vulnérabilité"/>

                        <Sidebar />
                        
                        <div class="content-wrapper">
                            <div className="gestion-top">
                                <Link to="/ajouter-vulnerabilite">Ajouter encore</Link>
                                <Link to="/modifier-vulnerabilite">Modifier encore</Link>

                            </div>
                            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                            
                            <div className="gestion-container">

                                <div className="data-table-container">
                                    <MUIDataTable
                                        title={"liste de session"}
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

                    : null
                }
            </>
        );
    }

}
