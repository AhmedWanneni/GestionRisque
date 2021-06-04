import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

export default class Impact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: "",
            desc : "",
            valeur : ""
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleValeurChange = this.handleValeurChange.bind(this);

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
    componentDidMount() {
        this.setState({ isLoading: true });
    }
    handleChange = (event) => {

        this.setState({ type: event.target.value });
    }
    



    render() {
        const { isLoading, type } = this.state;
        return (
            <>
                <div className="impact-container">
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Type : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type </MenuItem>
                            <MenuItem value={"Réputation"}>Réputation</MenuItem>
                            <MenuItem value={"Perte de client"}>Perte de client</MenuItem>
                            <MenuItem value={"Les couts d'exploitation"}>Les couts d'exploitation </MenuItem>
                            <MenuItem value={"Perte de revenue"}>Perte de revenue </MenuItem>
                            <MenuItem value={"Perte financière ponctuelle"}> Perte financière ponctuelle</MenuItem>
                            <MenuItem value={"Perturbation de productivité"}>Perturbation de productivité </MenuItem>
                            <MenuItem value={"La Vie "}>La Vie </MenuItem>
                            <MenuItem value={"Santé"}>Santé </MenuItem>
                            <MenuItem value={"Sécurité"}>Sécurité</MenuItem>
                            <MenuItem value={"Amendes"}>Amendes</MenuItem>
                            <MenuItem value={"Procès"}>Procès</MenuItem>
                            <MenuItem value={"Enquetess"}>Enquetes</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl className="form-control-trait">
                    <TextField valeur={type} id="standard-basic" multiline rowMax={4}
                            label="Description : " onChange={this.handleChange}/>

                    </FormControl>



                    <FormControl className="form-control-trait">
                        <label htmlFor="">Valorisation : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">valeur</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>

                        </Select>
                    </FormControl>
                </div>
            </>
        );
    }
}