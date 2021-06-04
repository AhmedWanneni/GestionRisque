import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import { Afficher_Impacts } from '../../Utils/Affichage';
export default class GestionImpacts extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            impact: [],
            columns: []
        }
    }
    componentDidMount() {
        Afficher_Impacts().then((res) => this.setState({ impact: res, isLoading: true })).catch(
            (err) => console.log(err)
        )


        const columns = ['id', 'description', 'type', 'valeur'];
        this.setState({ columns: columns });


    }
    render() {
        const { isLoading, columns, impact } = this.state;
        const x = Object.values(impact);
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
                               <TopBar title="Gestion impacts"/>

                        <Sidebar />
                       
                        <div class="content-wrapper">
                        <div className="gestion-top">
                                <Link to="/ajouter-impacts">Ajouter impacts</Link>
                                <Link to="/modifier-impacts">Modifer impacts</Link>
                        </div>
                            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                            
                            <div className="gestion-container">

                                <div className="data-table-container">
                                    <MUIDataTable
                                        title={"Liste impacts"}
                                        data={k}
                                        columns={columns}

                                    />
                                </div>
                                {/*<Link to="/ajouter-session">Ajouter</Link>*/}
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
