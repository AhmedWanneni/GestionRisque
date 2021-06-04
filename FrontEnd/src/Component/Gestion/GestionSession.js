import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
import axios from 'axios';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Afficher_Sessions } from '../../Utils/Affichage';
import { Ajouter_Sessions } from '../../Utils/Gestion';

import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

class GestionSession extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            session: [],
            columns: [],
            date_debut: "01/01/2021",
            date_fin: "02/01/2021",
            id_session : "",
            options : {}
        }
        this.handleDebutChange = this.handleDebutChange.bind(this);
        this.handleFinChange = this.handleFinChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
    }
    componentDidMount() {
        Afficher_Sessions().then((res) => this.setState({ session: res, isLoading: true })).catch(
            (err) => console.log(err)
        )
        

        const columns = ['id', 'date debut', 'date fin'];
        const options = {
            onRowsDelete : (rowsDeleted, dataRows) => {
                //const idsToDelete = dataRows.map(d => data[d.dataIndex].id); // array of all ids to to be deleted
            }
        }
        this.setState({ columns: columns,options:options });


    }
    handleDebutChange = (event) => {
        this.setState({ date_debut: event.target.value });
        console.log(event.target.value);

    };
    handleFinChange = (event) => {
        this.setState({ date_fin: event.target.value });
    };
    handleIdChange = (event) => {
        this.setState({ id_session: event.target.value });
        
    };
    
    handleSaveSession = (event) =>{
        let date_debut = this.state.date_debut;
        let date_fin = this.state.date_fin;
        let id_session = this.state.id_session;
        
        Ajouter_Sessions(id_session,date_debut,date_fin)
        .then((res) => console.log(JSON.stringify(res)))
        .catch((e) => console.log("this is the error" + e));
        event.preventDefault();
    }
    
    render() {
        const { isLoading, session, columns , options } = this.state;
        //const x = Object.values(session[0]);
        const x = Object.values(session);
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
                        <TopBar title="Gestion Session"/>
                        <Sidebar />
                        <div class="content-wrapper">
                            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                            <div className="gestion-top">

                                <TextField id="standard-basic" label="Id" value={this.state.id_session} onChange={this.handleIdChange}/>
                                <input type="date"
                                        value={this.state.date_debut}
                                        onChange={this.handleDebutChange}
                                        
                                />
                                <input type="date"
                                        value={this.state.date_fin}
                                        onChange={this.handleFinChange}
                                        
                                />
                                   


                                <Button variant="contained" color="primary" onClick={this.handleSaveSession}>Ajouter</Button>

                            </div>
                            <div className="gestion-container">

                                <div className="data-table-container">

                                    {<MUIDataTable

                                        title={"Liste de session"}
                                        data={k}
                                        columns={columns}
                                        options={options}

                                    />}
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

export default GestionSession;