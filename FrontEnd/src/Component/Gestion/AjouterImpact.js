import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Ajouter_Impacts } from '../../Utils/Gestion';
import Sidebar from '../SideBar';
import TopBar from '../TopBar';

export default class AjouterImpacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: "",
            desc : "",
            valeur : "",
            id : ""
        }
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleValeurChange = this.handleValeurChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);

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
     
    // save
    SaveData = () => {
        let { id,type ,desc,lieu,valeur } = this.state;

        Ajouter_Impacts(id,desc,type,valeur);
        window.location = './gestion-impacts';
    };
    render() {
        let { id,desc,type,valeur } = this.state;
        return (

            <>
            <TopBar title="Ajouter Impacts"/>
            <Sidebar/>
                <div class="content-wrapper ajouter-wrap">
                <FormControl className="form-control-trait">
                    <TextField valeur={id} id="standard-basic" multiline rowMax={4} label="Id  : " onChange={this.handleIdChange} />
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
                            <MenuItem value={"R??putation"}>R??putation</MenuItem>
                            <MenuItem value={"Perte de client"}>Perte de client</MenuItem>
                            <MenuItem value={"Les couts d'exploitation"}>Les couts d'exploitation </MenuItem>
                            <MenuItem value={"Perte de revenue"}>Perte de revenue </MenuItem>
                            <MenuItem value={"Perte financi??re ponctuelle"}> Perte financi??re ponctuelle</MenuItem>
                            <MenuItem value={"Perturbation de productivit??"}>Perturbation de productivit?? </MenuItem>
                            <MenuItem value={"La Vie "}>La Vie </MenuItem>
                            <MenuItem value={"Sant??"}>Sant?? </MenuItem> 
                            <MenuItem value={"S??curit??"}>S??curit??</MenuItem>
                            <MenuItem value={"Amendes"}>Amendes</MenuItem>
                            <MenuItem value={"Proc??s"}>Proc??s</MenuItem>
                            <MenuItem value={"Enquetess"}>Enquetes</MenuItem>
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