import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Ajouter_Actifs, Ajouter_Menaces } from '../../Utils/Gestion';
import Sidebar from '../SideBar';
import TopBar from '../TopBar';

export default class AjouterActifs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: "",
            desc: "",
            lieu: "",
            propr: "",
            id: "",
            id_session:"",
            integrite: "",
            disponibilite: "",
            confidentialite: "",
            mesure: "",
            valeur: ""

        }
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleLieuChange = this.handleLieuChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleIntegriteChange = this.handleIntegriteChange.bind(this);
        this.handleDisponibiliteChange = this.handleDisponibiliteChange.bind(this);
        this.handleConfidentialiteChange = this.handleConfidentialiteChange.bind(this);
        this.handleMesureChange = this.handleMesureChange.bind(this);
        this.handleValeurChange = this.handleValeurChange.bind(this);
        this.handleIdSessionChange = this.handleIdSessionChange.bind(this);


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
    // lieu
    handleLieuChange = (event) => {
        this.setState({ lieu: event.target.value });
    }
    // id
    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    }
    // propr
    handleProprChange = (event) => {
        this.setState({ propr: event.target.value });
    }
    //integrité
    handleIntegriteChange = (event) => {
        this.setState({ integrite: event.target.value });
    }
    //disponibilité
    handleDisponibiliteChange = (event) => {
        this.setState({ disponibilite: event.target.value });
    }
    //confidentialité
    handleConfidentialiteChange = (event) => {
        this.setState({ confidentialite: event.target.value });
    }
    //mesure
    handleMesureChange = (event) => {
        this.setState({ mesure: event.target.value });
    }
    //valeur
    handleValeurChange = (event) => {
        this.setState({ valeur: event.target.value });
    }
    handleIdSessionChange = (event) => {
        this.setState({ id_session: event.target.value });
    }
    // save
    SaveData = () => {
        let { id, id_session,desc, lieu, propr, type, integrite, disponibilite, confidentialite, mesure, valeur } = this.state;

    Ajouter_Actifs(id,id_session,desc, lieu, propr, type,integrite,disponibilite,confidentialite,mesure,valeur);
     alert("actif ajouté");
     window.location = './gestion-actifs';
     /*Ajouter_Sessions(id_session,date_debut,date_fin)
     .then((res) => console.log(JSON.stringify(res)))
     .catch((e) => console.log("this is the error" + e));
     event.preventDefault();*/
    };
    render() {
        let { id,id_session, desc, lieu, propr, type, integrite, disponibilite, confidentialite, mesure, valeur } = this.state;
        return (

            <>
                <TopBar title="Ajouter actifs" />
                <Sidebar />
                <div class="content-wrapper ajouter-wrap">
                    <FormControl className="form-control-trait">
                        <TextField valeur={id} id="standard-basic" multiline rowMax={4} label="Id actif  " onChange={this.handleIdChange} />
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <TextField valeur={id_session} id="standard-basic" multiline rowMax={4} label="Id session  " onChange={this.handleIdSessionChange} />
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <TextField valeur={desc} id="standard-basic" multiline rowMax={4}
                            label="Description  " onChange={this.handleDescChange} />

                    </FormControl>
                    <FormControl className="form-control-trait">

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lieu}
                            onChange={this.handleLieuChange}
                            displayEmpty
                        >
                            <MenuItem value="">lieu </MenuItem>
                            <MenuItem value={"Ariana"}>Ariana</MenuItem>
                            <MenuItem value={"Ben Arous"}>Ben Arous</MenuItem>
                            <MenuItem value={"Beja"}>Beja</MenuItem>
                            <MenuItem value={"Bizerte"}>Bizerte</MenuItem>
                            <MenuItem value={"Gabes"}>Gabes</MenuItem>
                            <MenuItem value={"Gafsa"}>Gafsa</MenuItem>
                            <MenuItem value={"Kairouan"}>Kairouan</MenuItem>
                            <MenuItem value={"Kasserine"}>Kasserine</MenuItem>
                            <MenuItem value={"Kebili"}>Kebili</MenuItem>
                            <MenuItem value={"Medenine"}>Medenine</MenuItem>
                            <MenuItem value={"La Manouba"}>La Manouba</MenuItem>
                            <MenuItem value={"Monastir"}>Monastir</MenuItem>
                            <MenuItem value={"Nabeul"}>Nabeul</MenuItem>
                            <MenuItem value={"Sidi Bouzid"}>Sidi Bouzid</MenuItem>
                            <MenuItem value={"Siliana"}>Siliana</MenuItem>
                            <MenuItem value={"Sousse"}>Sousse</MenuItem>
                            <MenuItem value={"Tataouine"}>Tataouine</MenuItem>
                            <MenuItem value={"Tozeur"}>Tozeur</MenuItem>
                            <MenuItem value={"Tunis"}>Tunis</MenuItem>
                            <MenuItem value={"Zaghouan"}>Zaghouan</MenuItem>

                        </Select>
                    </FormControl>

                    <TextField valeur={propr} id="standard-basic" multiline rowMax={4}
                        label=" propriétaire: " onChange={this.handleProprChange} />
                    <FormControl className="form-control-trait">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleTypeChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type </MenuItem>
                            <MenuItem value={"application"}>Application </MenuItem>
                            <MenuItem value={"serveurs"}> serveurs</MenuItem>
                            <MenuItem value={"Equipement réseaux et sécurité"}>Equipement réseaux et sécurité</MenuItem>
                            <MenuItem value={"ligne de communication"}>ligne de communication</MenuItem>
                            <MenuItem value={"salle serveur"}>salle serveur</MenuItem>
                            <MenuItem value={"local technique"}>local technique</MenuItem>
                            <MenuItem value={"administrateurs"}>administrateurs</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={integrite}
                            onChange={this.handleIntegriteChange}
                            displayEmpty
                        >
                            <MenuItem value="">integrite</MenuItem>
                            <MenuItem value={1}>1 </MenuItem>
                            <MenuItem value={2}> 2</MenuItem>
                            <MenuItem value={3}> 3</MenuItem>
                            <MenuItem value={4}> 4</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={disponibilite}
                            onChange={this.handleDisponibiliteChange}
                            displayEmpty
                        >
                            <MenuItem value="">disponibilite</MenuItem>
                            <MenuItem value={1}>1 </MenuItem>
                            <MenuItem value={2}> 2</MenuItem>
                            <MenuItem value={3}> 3</MenuItem>
                            <MenuItem value={4}> 4</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={confidentialite}
                            onChange={this.handleConfidentialiteChange}
                            displayEmpty
                        >
                            <MenuItem value="">confidentialite </MenuItem>
                            <MenuItem value={1}>1 </MenuItem>
                            <MenuItem value={2}> 2</MenuItem>
                            <MenuItem value={3}> 3</MenuItem>
                            <MenuItem value={4}> 4</MenuItem>
                        </Select>

                    </FormControl>
                   
                        <TextField valeur={mesure} id="standard-basic" multiline rowMax={4}
                            label=" mesure: " onChange={this.handleMesureChange} />
                  
                    
                        <TextField valeur={valeur} id="standard-basic" multiline rowMax={4}
                            label=" valeur mesure: " onChange={this.handleValeurChange} />
                  
                    <div className="btn-menace">
                        <Button variant="contained" color="primary" onClick={this.SaveData}>Ajouter encore</Button>
                    </div>
                </div>
            </>
        );
    }
}