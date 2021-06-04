import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Modifier_Vulnerabilites } from '../../Utils/Gestion';
import Sidebar from '../SideBar';
import TopBar from '../TopBar';

export default class ModifierVulnerabilite extends Component {
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

        Modifier_Vulnerabilites(id,desc,type,valeur);
    };
    render() {
        let { id,desc,type,valeur } = this.state;
        return (

            <>
            <TopBar title="Ajouter vulnerabilite"/>
            <Sidebar/>
                <div class="content-wrapper ajouter-wrap">
                <FormControl className="form-control-trait">
                    <TextField valeur={id} id="standard-basic" multiline rowMax={4} label="Id : " onChange={this.handleIdChange} />
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
                            <MenuItem value={10}>Matériel</MenuItem>
                            <MenuItem value={20}>Logiciel</MenuItem>
                            <MenuItem value={30}>Réseau</MenuItem>
                            <MenuItem value={30}>Personnel</MenuItem>
                            <MenuItem value={30}>Site</MenuItem>
                            <MenuItem value={30}>Organisme</MenuItem>
                            
                        </Select>
                    </FormControl>
                    
                    <div className="btn-menace">
                    <Button variant="contained" color="primary" onClick={this.SaveData}>Modifier vulnerabilite</Button>
                    </div>
                </div>
            </>
        );
    }
}