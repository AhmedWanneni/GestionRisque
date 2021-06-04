import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Ajouter_Vulnerabilites } from '../../Utils/Gestion';
import Sidebar from '../SideBar';
import TopBar from '../TopBar';

export default class AjouterVulnerabilite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: "",
            desc : "",
            valeur : "",
            id : "",
            id_actif:""
        }
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleValeurChange = this.handleValeurChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleIdActifChange = this.handleIdActifChange.bind(this);

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
        this.setState({valeur: event.target.value });
    }
     // id
     handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    }
    handleIdActifChange = (event) => {
        this.setState({ id_actif: event.target.value });
    }
    
     
    // save
    SaveData = () => {
        let { id,id_actif,type ,desc,lieu,valeur } = this.state;

        Ajouter_Vulnerabilites(id,id_actif,desc,type,valeur);
        alert(" vulnerabilité ajoutée");
        window.location = './gestion-vulnerabilite';
    };
    render() {
        let { id,desc,type,valeur,id_actif } = this.state;
        return (

            <>
            <TopBar title="Ajouter vulnerabilite"/>
            <Sidebar/>
                <div class="content-wrapper ajouter-wrap">
                <FormControl className="form-control-trait">
                    <TextField valeur={id} id="standard-basic" multiline rowMax={4} label="Id  : " onChange={this.handleIdChange} />
                    <TextField valeur={id_actif}  multiline rowMax={4} label="Id actif  : " onChange={this.handleIdActifChange} />
                    </FormControl>
                    <FormControl className="form-control-trait">
                    <TextField valeur={desc} id="standard-basic" multiline rowMax={4} 
                    label="Description : " onChange={this.handleDescChange} />

                    </FormControl>
                    
                    

                    <FormControl className="form-control-trait">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleTypeChange}
                            displayEmpty
                        >     
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={"Matériel"} >Matériel</MenuItem>
                            <MenuItem value={"Logiciel"}>Logiciel</MenuItem>
                            <MenuItem value={"Réseau"}>Réseau</MenuItem>
                            <MenuItem value={"Personnel"}>Personnel</MenuItem>
                            <MenuItem value={"Site"}>Site</MenuItem>
                            <MenuItem value={"Organisme"}>Organisme</MenuItem>
                            
                        </Select>
                    </FormControl>
                    
                    <div className="btn-menace">
                    <Button variant="contained" color="primary" onClick={this.SaveData}>Ajouter encore</Button>
                    </div>
                </div>
            </>
        );
    }
}