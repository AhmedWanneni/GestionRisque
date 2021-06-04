import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
import { Afficher_Risques } from '../../Utils/Affichage';
class GestionMesures extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            risque: [],
            columns: []
        }
    }
    componentDidMount() {
        Afficher_Risques().then((res) => this.setState({ risque: res, isLoading: true })).catch(
            (err) => console.log(err)
        )


        const columns = ['id', 'type', 'occurence', 'OrdrePriorite', 'valeur', 'solution',];
        this.setState({ columns: columns });


    }
    render() {
        const { isLoading, columns, risque } = this.state;
        const x = Object.values(risque);
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
                        <TopBar title="Gestion mesures" />
                        <Sidebar />
                        <div class="content-wrapper">

                            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                            {/*<div className="gestion-top">
                                <label htmlFor="">Description :</label>
                                <div class="field">
                                    <p class="control has-icons-left has-icons-right">

                                        <input class="input" type="email" placeholder="Votre matricule ..." />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                                    </p>
                                </div>
                                <label>status : </label>
                                <div class="select">
                                    <select>
                                        <option>en cours</option>
                                        <option>this </option>
                                    </select>
                                </div>
                            </div>*/}
                            <div className="gestion-top">
                                <Link to="/ajouter-mesures">Ajouter mesures</Link>
                                <Link to="/modifier-mesures">Modifer mesures</Link>
                            </div>
                            <div className="gestion-container">

                                <div className="data-table-container">
                                    <MUIDataTable
                                        title={"liste de mesure"}
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
export default GestionMesures;