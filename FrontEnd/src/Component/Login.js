import React, { Component, useState } from 'react';
import {Link , Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {Login_Admin} from '../Utils/Admins';

const Login = () => {

    
    const [matricule,setMatricule] = useState();
    const [pass,setPass] = useState();
    let isLoading  = true;
    const history = useHistory();
    let saveValues = () => Login_Admin(matricule,pass)
                            .then((data) => {
                                if(data.status == 400){
                                    alert('matricule ou mot de passe incorrecte')}
                                else {
                                    history.push("/session");
                                    
                                    localStorage.setItem('id', data.id);
                                    localStorage.setItem('nom', data.nom);
                                    localStorage.setItem('prenom', data.prenom);
                                    localStorage.setItem('matricule', data.matricule);
                                    //localStorage.setItem('matricule', data.matricule);
                                    
                                }
                            })
                            .catch((e) => console.log(e));
        return(
            <>
            {isLoading ?
            <>
            
            <div class="content">
            <div className="ImgLoginWrap">
                    <img src="img/login.png"/>
            </div>
            <div className="FormContainer">
            <label>Matriucle : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="number" placeholder="Votre matricule ..." onChange={e => setMatricule(e.target.value)}/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                <label>mot de passe : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Votre mot de passe ..." onChange={e => setPass(e.target.value)}/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                <button onClick={saveValues}>Connexion</button>
                <Link to="/SignUp">Créer un compte</Link>
            </div>
            </div>
            </>
            
            :null
            }
            </>
        );
    }

    
export default Login;