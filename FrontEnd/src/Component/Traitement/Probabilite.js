import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

export default class Probabilite extends Component {
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
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>Financier</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Description : </label>
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
                        <label htmlFor="">Valorisation : </label>
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
                </div>
            </>
        );
    }
}