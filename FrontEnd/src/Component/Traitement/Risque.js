import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button, Box } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

export default class Risque extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({ isLoading: true });
    }
    handleChange = (event) => {
        this.setState({ type: event.target.value });
    }
    render(){
        const { isLoading, type } = this.state;
        return(
            <>
                <div className="risque-container">
                    <div>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">vulnerabilité : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>Financier</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Impact : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>description impact</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Mesure : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Probabilité : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Risque: </label>
                        <Box component="div">5</Box>
                    </FormControl>
                    
                    <div>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Option traitement: </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Réduction du risque :</MenuItem>
                            <MenuItem value={10}>conservation du risque</MenuItem>
                            <MenuItem value={20}>evitement du risque</MenuItem>
                            <MenuItem value={30}>Transfert du risque</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <div>
                    <Button variant="contained" color="primary">Enregistrer</Button>
                    </div>
                    
                </div>
            </>
        );
    }
}