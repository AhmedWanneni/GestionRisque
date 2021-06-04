import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import {Modifier_Menaces } from '../../Utils/Gestion';
import Sidebar from '../SideBar';
import TopBar from '../TopBar';

export default class ModifierMenaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id: "",
            desc: "",
            acces: "",
            acteur: "",
            type: "",
            motivation: "",
            resultat: "",
            incident_passe: "",
            valeur: ""
        }
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleAccesChange = this.handleAccesChange.bind(this);
        this.handleActeurChange = this.handleActeurChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleMotivationChange = this.handleMotivationChange.bind(this);
        this.handleResultatChange = this.handleResultatChange.bind(this);
        this.handleIncidentChange = this.handleIncidentChange.bind(this);
        this.handleValeurChange = this.handleValeurChange.bind(this);

    }
    componentDidMount() {
        this.setState({ isLoading: true });

    }
    // type 
    handleTypeChange = (event) => {
        this.setState({ type: event.target.value });
    }
    // desc
    handleDescChange = (event) => {
        this.setState({ desc: event.target.value });
    }
    // valeur
    handleValeurChange = (event) => {
        this.setState({ valeur: event.target.value });
    }
    // acces
    handleAccesChange = (event) => {
        this.setState({ acces: event.target.value });
    }
    // id
    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    }
    // acteur
    handleActeurChange = (event) => {
        this.setState({ acteur: event.target.value });
    }
    // motivation
    handleMotivationChange = (event) => {
        this.setState({ motivation: event.target.value });
    }
    // incident
    handleIncidentChange = (event) => {
        this.setState({ incident_passe: event.target.value });
    }
    // resultat
    handleResultatChange = (event) => {
        this.setState({ resultat: event.target.value });
    }


    // save
    SaveData = () => {
        let { id, desc, acces, acteur, type, motivation, resultat, incident_passe, valeur } = this.state;

        Modifier_Menaces(id, desc, acces, acteur, type, motivation, resultat, incident_passe, valeur);
    };
    render() {
        let { id, desc, acces, acteur, type, motivation, resultat, incident_passe, valeur } = this.state;

        return (

            <>
                <TopBar title="Ajouter Menaces" />
                <Sidebar />
                <div class="content-wrapper ajouter-wrap">
                    {/* ID */}
                    <FormControl className="form-control-trait">
                        <TextField valeur={id} id="standard-basic"  multiline rowMax={4}  label="Id Menaces : " onChange={this.handleIdChange} />
                    </FormControl>
                    {/* Desc */}
                    <FormControl className="form-control-trait">
                        <TextField valeur={desc} id="standard-basic" multiline rowMax={4}
                            label="Description : " onChange={this.handleDescChange} />
                    </FormControl>
                    {/*Acces*/}
                    <TextField valeur={acces} id="standard-basic"  multiline rowMax={4}  label="Acces : " onChange={this.handleAccesChange} />
                    {/*Type */}
                   
                    {/*Acteur*/}
                    <TextField valeur={acteur} id="standard-basic" multiline rowMax={4} label="Acteur" onChange={this.handleActeurChange} />
                    {/*motivation*/}
                    <TextField valeur={acteur} id="standard-basic" multiline rowMax={4} label="motivation" onChange={this.handleMotivationChange} />
                    <TextField valeur={resultat} id="standard-basic" label="resultat" onChange={this.handleResultatChange} />
                    
                    <div className="btn-menace">
                        <Button variant="contained" color="primary" onClick={this.SaveData}>Modifier</Button>
                    </div>
                </div>
            </>
        );
    }
}
