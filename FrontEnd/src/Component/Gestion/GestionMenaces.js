import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
import { Afficher_Menaces } from '../../Utils/Affichage';
export default class GestionMenaces extends Component {



    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            menace: [],
            columns: []
        }
    }
    componentDidMount() {
        Afficher_Menaces().then((res) => this.setState({ menace: res, isLoading: true })).catch(
            (err) => console.log(err)
        )


        const columns = ['id', 'description', 'acces', 'acteur', 'type', 'motivation',
            'resultat', 'incident_passe', 'valeur'];
        this.setState({ columns: columns });


    }
    render() {
        const { isLoading, columns, menace } = this.state;
        const x = Object.values(menace);
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
                        <TopBar title="Gestion menaces"/>
                        <Sidebar />
                        
                        <div class="content-wrapper">
                        <div className="gestion-top">
                                <Link to="/ajouter-menaces">Ajouter menaces</Link>
                                <Link to="/modifier-menaces">Modifer menaces</Link>
                            </div>
                            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                            
                            <div className="gestion-container">

                                <div className="data-table-container">
                                    <MUIDataTable
                                        title={"liste de menaces"}
                                        data={k}
                                        columns={columns}

                                    />
                                </div>
                                {/* <Link to="/ajouter-session">Ajouter</Link>*/}
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
