import axios from 'axios';
import {Redirect} from 'react-router-dom';

export const SignUp_Admin = async (nom,prenom,matricule,pass) =>{
    let admin = {
       "id" : "300",
        "nom" : nom,
        "prenom" : prenom,
        "matricule" : matricule,
        "pass" : pass
    }
    const res = await axios.post(`http://localhost:5000/Admins`, admin)
    return res.data;
    };
    
    

export const Login_Admin = async (matricule,pass) => {

    const res = await axios.get(`http://localhost:5000/Login/${matricule}/${pass}`);
    return res.data;
}


// 2 problems ID & redirect