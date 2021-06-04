import React, { useState } from "react";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import {BrowserRouter ,Redirect,Route ,Switch, withRouter} from 'react-router-dom';
import Session from "./Component/Traitement/Session";
import GestionSession from "./Component/Gestion/GestionSession";
import GestionImpacts from "./Component/Gestion/GestionImpacts";
import GestionVul from "./Component/Gestion/GestionVul";
import GestionActifs from "./Component/Gestion/GestionActifs";
import GestionMenaces from "./Component/Gestion/GestionMenaces";
import GestionMesures from "./Component/Gestion/GesitonMesures";
import ChoixActifs from "./Component/Traitement/ChoixActifs";
import TraitementContainer from "./Component/Traitement/TraitemenContainer";
import AjouterActifs from "./Component/Gestion/AjouterActifs";
import AjouterMesures from "./Component/Gestion/AjouterMesures";
import AjouterMenaces from "./Component/Gestion/AjouterMenaces";
import AjouterImpacts from "./Component/Gestion/AjouterImpact";
import AjouterVulnerabilite from "./Component/Gestion/AjouterVul";
import ModifierActifs from "./Component/Gestion/ModifierActifs";
import ModifierMesures from "./Component/Gestion/ModifierMesures";
import ModifierMenaces from "./Component/Gestion/ModifierMenaces";
import ModifierImpacts from "./Component/Gestion/ModifierImpact";
import ModifierVulnerabilite from "./Component/Gestion/ModifierVul";
import AnncienneSession from "./Component/Traitement/AncienneSession";
import Actif from "./Component/Traitement/Actif";
import Actifchoisi from "./Component/Traitement/Actifchoisi";

function App() {
  const [token,setToken] = useState();
  //if(!token) return <Login setToken={setToken}/>
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/session" component={Session}/>
        <Route exatct path="/gestion-session" component={GestionSession}/>
        <Route exatct path="/gestion-impacts" component={GestionImpacts}/>
        <Route exatct path="/gestion-vulnerabilite" component={GestionVul}/>
        <Route exatct path="/gestion-actifs" component={GestionActifs}/>
        <Route exatct path="/gestion-menaces" component={GestionMenaces}/>
        <Route exatct path="/gestion-mesures" component={GestionMesures}/>
        <Route exact path="/choix-actifs" component={ChoixActifs}/>
        <Route exact path="/traitement" component={TraitementContainer}/>
        <Route exact path="/ajouter-actif" component={AjouterActifs}/>
        <Route exact path="/ajouter-mesures" component={AjouterMesures}/>
        <Route exact path="/ajouter-impacts" component={AjouterImpacts}/>
        <Route exact path="/ajouter-menaces" component={AjouterMenaces}/>
        <Route exact path="/ajouter-vulnerabilite" component={AjouterVulnerabilite}/>
        <Route exact path="/modifier-actif" component={ModifierActifs}/>
        <Route exact path="/modifier-mesures" component={ModifierMesures}/>
        <Route exact path="/modifier-impacts" component={ModifierImpacts}/>
        <Route exact path="/modifier-menaces" component={ModifierMenaces}/>
        <Route exact path="/modifier-vulnerabilite" component={ModifierVulnerabilite}/>
        <Route exact path="/ancienne-session" component={AnncienneSession}/>
        <Route exact path="/actif" component={Actif}/>
        <Route exact path="/actif-choisi" component={Actifchoisi}/>



      </Switch>
    </BrowserRouter>
  );
}

export default App;
