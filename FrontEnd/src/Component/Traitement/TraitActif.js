import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MUIDataTable from "mui-datatables";
import { Button } from '@material-ui/core';

import { Afficher_Actif } from '../../Utils/Affichage';


export default class TraitActif extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            actif : [],
            columns : [],
            type : ""
        }
    }
    componentDidMount(){
        Afficher_Actif().then((res) => this.setState({actif:res,isLoading:true})).catch(
            (err) => console.log(err)
        )


        const columns = ['id','description','lieu','proprietaire','type'];
        this.setState({columns:columns});
        

    }
    handleChange = (event) => {
        console.log("this is handleChange");
        this.setState({ type: event.target.value });
    };
    render() {
        const { isLoading, columns,actif,type } = this.state;
        const x = Object.values(actif);
        let y;
        let k = [];
        x.forEach(element => {
            y = Object.values(element);
            k.push(y);
        });
        console.log(k);
        console.log("this is sessions : " ,k);
        return (
            <>
                <div className="traitement-content">
                    <h3>Traitement Actifs : </h3>
                    <div>
                    <TextField id="standard-basic" label="Choisir Id actifs" />
                    <Button variant="contained" color="primary" class="choisir" >Choisir actif</Button>

                        
                        
                      

                    </div>
                    <div>

                    


                    </div>


                    <MUIDataTable
                        className="data-table-traitement"

                        data={k}
                        columns={columns}
                        
                    />


                </div>
            </>
        );
    }
}