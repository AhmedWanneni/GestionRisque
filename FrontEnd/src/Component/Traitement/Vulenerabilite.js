import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Ajouter_Vulnerabilites } from '../../Utils/Gestion';
export default class Vulnerabilite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: "",
            desc: "",
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
        this.setState({ valeur: event.target.value });
    }
    // id
    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    }
    
    // save
    SaveData = () => {
        let { id, type , desc , valeur } = this.state;

        Ajouter_Vulnerabilites(id,desc,type,valeur).then(() => console.log("data inserted")).catch((e) => console.log(e));
    };
    render() {
        let { isLoading,id, type , desc , valeur} = this.state;
        return (

            <>
                <div class="menace-container">
                <FormControl className="form-control-trait">
                    <TextField valeur={id} id="standard-basic" multiline rowMax={4} label="Id  " onChange={this.handleIdChange} />
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
                            <MenuItem value={10}>Matériel</MenuItem>
                            <MenuItem value={20}>Logiciel</MenuItem>
                            <MenuItem value={30}>Réseau</MenuItem>
                            <MenuItem value={30}>Personnel</MenuItem>
                            <MenuItem value={30}>Site</MenuItem>
                            <MenuItem value={30}>Organisme</MenuItem>
                            
                        </Select>
                    </FormControl>
                   
                    
                    
                    <FormControl className="form-control-trait">
                    <TextField valeur={desc} id="standard-basic" multiline rowMax={4} label="Description  " onChange={this.handleDescChange} />
                    </FormControl>
                    <FormControl className="form-control-trait">
                        
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={valeur}
                            onChange={this.handleValeurChange}
                            displayEmpty
                        >
                            <MenuItem value="">Valeur </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
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