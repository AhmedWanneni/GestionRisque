import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Ajouter_Mesures } from '../../Utils/Gestion';
import Sidebar from '../SideBar';
import TopBar from '../TopBar';

export default class AjouterMesures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: "",
            id: "",
           
            occ: "",
            ordrePriorite: "",
            valeur: "",
            solution: ""
        }
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleOccChange = this.handleOccChange.bind(this);
        this.handleOrdrePrioriteChange = this.handleOrdrePrioriteChange.bind(this);
        this.handleValeurChange = this.handleValeurChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
      

    }
    componentDidMount() {
        this.setState({ isLoading: true });

    }
    // type 
    handleTypeChange = (event) => {
        this.setState({ type: event.target.value });
    }
    // occ
    handleOccChange = (event) => {
        this.setState({ occ: event.target.value });
    }
    // valeur
    handleValeurChange = (event) => {
        this.setState({ valeur: event.target.value });
    }
    // id
    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    }
     
    // solution
    handleSolutionChange = (event) => {
        this.setState({ solution: event.target.value });
    }
    // ordre priorite
    handleOrdrePrioriteChange = (event) => {
        this.setState({ ordrePriorite: event.target.value });
    }

    // save
    SaveData = () => {
        let { id, occ, type, ordrePriorite, valeur, solution } = this.state;

        Ajouter_Mesures(id, occ, type, ordrePriorite, solution, valeur);
        window.location = './gestion-mesures';
    };
    render() {
        let { id, occ, type, ordrePriorite, valeur, solution } = this.state;

        return (

            <>
                <TopBar title="Ajouter Mesures" />
                <Sidebar />
                <div class="content-wrapper ajouter-wrap">
                    <FormControl className="form-control-trait">
                        <TextField valeur={id} id="standard-basic" label="Id  : " onChange={this.handleIdChange} />
                    </FormControl>
                    <FormControl className="form-control-trait">
                    

                    </FormControl>
                    <TextField valeur={solution} id="standard-basic" multiline rowMax={4} label="description" onChange={this.handleSolutionChange} />
                    
                    <FormControl className="form-control-trait">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleTypeChange}
                            displayEmpty
                        >
                            <MenuItem value="">status :</MenuItem>
                            <MenuItem value={10}>en cours</MenuItem>
                            <MenuItem value={20}></MenuItem>
                            <MenuItem value={30}></MenuItem>
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