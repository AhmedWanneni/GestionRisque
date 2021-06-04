import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";


import { SignUp_Admin } from '../Utils/Admins';


const SignUp = () => {
    const [nom,setNom] = useState();
    const [prenom,setPrenom] = useState();
    const [matricule,setMatricule] = useState();
    const [pass,setPass] = useState();
    let isLoading = true;
    const history = useHistory();
    let saveValues = () => SignUp_Admin(nom,prenom,matricule,pass)
                            .then((data) => {
                                if(data.status == 400)
                                    alert("il y a une erreur")
                                else 
                                history.push("/");
                            })
                            .catch((err) => console.log(err))
    return (
        <>
            {isLoading ?
                <>

                    <div class="content">
                        <div className="ImgSignUpWrap">
                            <img src="img/add.jpg" />
                        </div>
                        <div className="FormContainer">
                            <label>Nom : </label>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">

                                    <input class="input" type="text" onChange={e => setNom(e.target.value)} placeholder="Votre nom ..." />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                                </p>
                            </div>
                            <label>Prénom : </label>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">

                                    <input class="input" type="text" onChange={e => setPrenom(e.target.value)} placeholder="Votre prénom ..." />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                                </p>
                            </div>
                            <label>Matricule : </label>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" type="number" placeholder="Votre matricule ..." onChange={e => setMatricule(e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                                </p>
                            </div>
                            <label> mot de passe : </label>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" type="password" placeholder="Votre mot de passe ..." onChange={e => setPass(e.target.value)}/>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                    <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                                </p>
                            </div>

                            <button className="AddUser-btn" onClick={saveValues} >Ajouter utilisateur </button>



                        </div>

                    </div>
                   
                </>
                
                : null
            }
        </>
    );
}

export default SignUp;