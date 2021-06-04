import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Ajouter_Menaces } from '../../Utils/Gestion';
export default class Menace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: "",
            acteur: "",
            motivation: "",
            resultat: "",
            incident: "",
            id : ""
        }
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleActeurChange = this.handleActeurChange.bind(this);
        this.handleMotivationChange = this.handleMotivationChange.bind(this);
        this.handleResultatChange = this.handleResultatChange.bind(this);
        this.handleIncidentChange = this.handleIncidentChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);

    }
    componentDidMount() {
        this.setState({ isLoading: true });
        
    }
    // type 
    handleTypeChange = (event) => {
        this.setState({ type: event.target.value });
    }
    // acteur
    handleActeurChange = (event) => {
        this.setState({ acteur: event.target.value });
    }
    // motivation
    handleMotivationChange = (event) => {
        this.setState({ motivation: event.target.value });
    }
    // resultat
    handleResultatChange = (event) => {
        this.setState({ resultat: event.target.value });
    }
    // incident
    handleIncidentChange = (event) => {
        this.setState({ incident: event.target.value });
    }
     // id
     handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    }
    // save
    SaveData = () => {
        let { id,type , acteur,motivation,resultat, incident } = this.state;

        Ajouter_Menaces(id,"pas de description","tout le monde",acteur,type,motivation,resultat,incident);
    };
    render() {
        let { id,isLoading, type , acteur,motivation,resultat, incident } = this.state;
        return (

            <>
                <div class="menace-container">
                <FormControl className="form-control-trait">
                    <TextField valeur={id} id="standard-basic" multiline rowMax={4} label="Id vulnerabilite : " onChange={this.handleIdChange} />
                    </FormControl>
                    <FormControl className="form-control-trait">

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleTypeChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type </MenuItem>
                            <MenuItem value={"Réseau"}>Réseau</MenuItem>
                            <MenuItem value={"Physique"}>Physique</MenuItem>
                            <MenuItem value={"Problèmes systèmes"}>Problèmes systèmes</MenuItem>
                            <MenuItem value={"Autres Problèmes "}>Autres Problèmes </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                       
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={acteur}
                            onChange={this.handleActeurChange}
                            displayEmpty
                        >
                            <MenuItem value="">acteur  </MenuItem>
                            <MenuItem value={"Interne"}>Interne</MenuItem>
                            <MenuItem value={"Externe"}>Externe</MenuItem>
                            <MenuItem value={"Défaut Logiciel"}>Défaut Logiciel</MenuItem>
                            <MenuItem value={"Le système plante"}>Le système plante</MenuItem>
                            <MenuItem value={"Défaut Matériel"}>Défaut Matériel</MenuItem>
                            <MenuItem value={"Code Malicieux"}>Code Malicieux</MenuItem>
                            <MenuItem value={"Pb d'alimentation"}>Pb d'alimentation</MenuItem>
                            <MenuItem value={"Pb Télécommunication"}>Pb Télécommunication</MenuItem>
                            <MenuItem value={"Pb Tiers"}>Pb Tiers</MenuItem>
                            <MenuItem value={"Catastrophes Naturelles"}>Catastrophes Naturelles</MenuItem>
                            
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                    
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={motivation}
                            onChange={this.handleMotivationChange}
                            displayEmpty
                        >
                            <MenuItem value=""> Motivation</MenuItem>
                            <MenuItem value={"Accidentelle"}>Accidentelle</MenuItem>
                            <MenuItem value={"Délibéré"}>Délibéré</MenuItem>
                            
                            </Select>  
                    </FormControl>
                    <FormControl className="form-control-trait">
                        
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={resultat}
                            onChange={this.handleResultatChange}
                            displayEmpty
                        >
                            <MenuItem value="">Resultat</MenuItem>
                            <MenuItem value={"Divulgation"}>Divulgation</MenuItem>
                            <MenuItem value={"Modification"}>Modification</MenuItem>
                            <MenuItem value={"Perte & Destruction"}>Perte et Destruction</MenuItem>
                            <MenuItem value={"Interruption"}>Interruption</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                    <TextField valeur={incident} id="standard-basic" multiline rowMax={4} label="Incident passé : " onChange={this.handleIncidentChange} />
                    </FormControl>
                    <div className="btn-menace">
                    <Button variant="contained" color="primary">Enregistrer</Button>
                    <Button variant="contained" color="primary" onClick={this.SaveData}>Ajouter encore</Button>
                    </div>
                </div>
            </>
        );
    }
}