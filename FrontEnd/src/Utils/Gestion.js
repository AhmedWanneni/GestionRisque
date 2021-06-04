import axios from 'axios';

// Session 

// ================= [Ajouter session] =================================

export const Ajouter_Sessions = async (id,debut, fin) => {
    let session = {
        "id": id,
        "date_debut": debut,
        "date_fin": fin
    }
    
    const res = await axios.post(`http://localhost:5000/Sessions`, session
        
        );
    return res.data;
}
// ===================== [Supprimer Session] ===========================

export const Supprimer_Sessions = async (id) => {
    const res = await axios.delete(`http://localhost:5000/Sessions/${id}`);
    return res.data;
}
// ===================== [Modifier Session] ===========================


export const Modifier_Sessions = (id, debut, fin) => {
    let session = {
        "id": id,
        "date_debut": debut,
        "date_fin": fin
    }
    axios.patch(`http://localhost:5000/Sessions/${id}`, session).then(
        (res) => {
            console.log(res);
        });
}

// Actifs



// Actif 

// ================= [Ajouter Actif] =================================

export const Ajouter_Actifs = (id,id_session,desc, lieu, propr, type,integrite,disponibilite,confidentialite,mesure,valeur) => {
    let actif = {
        "id": id,
        "id_session":id_session,
        "description": desc,
        "lieu": lieu,
        "proprietaire": propr,
        "type": type,
        "integrite" :integrite,
        "disponibilite" :disponibilite,
        "confidentialite":confidentialite,
        "mesure": mesure,
        "valeur" :valeur

    }
    axios.post(`http://localhost:5000/Actifs`, actif).then(
        (res) => {
            console.log(res.data);
        });
}
// ===================== [Supprimer Actif] ===========================

export const Supprimer_Actifs = (id) => {
    axios.delete(`http://localhost:5000/Actifs/${id}`).then(
        (res) => {
            console.log(res);
        });
}
// ===================== [Modifier Actif] ===========================


export const Modifier_Actifs = (id,id_session,desc, lieu, propr, type,integrite,disponibilite,confidentialite,mesure,valeur) => {
    let actif = {
        "id": 1,
        "id_session":id_session,
        "description": desc,
        "lieu": lieu,
        "proprietaire": propr,
        "type": type,
        "integrite" :integrite,
        "disponibilite" :disponibilite,
         "confidentialite":confidentialite,
        "mesure": mesure,
        "valeur" :valeur
    }
    axios.patch(`http://localhost:5000/Actifs/${id}`, actif).then(
        (res) => {
            console.log(res);
        });
}


// Vulnerabilite 

// ================= [Ajouter Vulnerabilite] =================================

export const Ajouter_Vulnerabilites = async (id,id_actif,desc, type, valeur) => {
    let vulnerabilite = {
        "id_actif":id_actif,
        "id": id,
        "description": desc,
        "type": type,
        "valeur": valeur
    }
    const res = await axios.post(`http://localhost:5000/Vulnerabilites`, vulnerabilite);
    return res.data;
    
}
// ===================== [Supprimer Vulnerabilite] ===========================

export const Supprimer_Vulnerabilites = (id) => {
    axios.delete(`http://localhost:5000/Vulnerabilites/${id}`).then(
        (res) => {
            console.log(res);
        });
}
// ===================== [Modifier Vulnerabilite] ===========================


export const Modifier_Vulnerabilites = (id, desc, type, valeur) => {
    let vulnerabilite = {
        "id": "1",
        "description": desc,
        "type": type,
        "valeur": valeur
    }
    axios.patch(`http://localhost:5000/Vulnerabilites/${id}`, vulnerabilite).then(
        (res) => {
            console.log(res);
        });
}

// Menace 

// ================= [Ajouter Menace] =================================

export const Ajouter_Menaces = (id, desc,acces,acteur,type,motivation,resultat,incident_passe,valeur) => {
   
    let menace = {
        "id": id,
        "description": desc,
        "acces": acces,
        "acteur": acteur,
        "motivation": motivation,
        "resultat": resultat,
        "incident_passe": incident_passe,
        "type": type,
        "valeur": valeur
    }
    axios.post(`http://localhost:5000/Menaces`, menace).then(
        (res) => {
            console.log(res.data);
        });
}
// ===================== [Supprimer Menace] ===========================

export const Supprimer_Menaces = (id) => {
    axios.delete(`http://localhost:5000/Menaces/${id}`).then(
        (res) => {
            console.log(res);
        });
}
// ===================== [Modifier Menace] ===========================


export const Modifier_Menaces = (id, desc, acces, acteur, type, motivation, resultat, incident_passe, valeur) => {
    let menace = {
        "id": "1",
        "description": desc,
        "acces": acces,
        "acteur": acteur,
        "motivation": motivation,
        "resultat": resultat,
        "incident_passe": incident_passe,
        "type": type,
        "valeur": valeur
    }
    axios.patch(`http://localhost:5000/Menaces/${id}`, menace).then(
        (res) => {
            console.log(res);
        });
}

// Impact 

// ================= [Ajouter Impact] =================================

export const Ajouter_Impacts = (id,desc, type, valeur) => {
    let impact = {
        "id": id,
        "description": desc,
        "type": type,
        "valeur": valeur
    }
    axios.post(`http://localhost:5000/Impacts`, impact).then(
        (res) => {
            console.log(res.data);
        });
}
// ===================== [Supprimer Impact] ===========================

export const Supprimer_Impacts = (id) => {
    axios.delete(`http://localhost:5000/Impacts/${id}`).then(
        (res) => {
            console.log(res);
        });
}
// ===================== [Modifier Impact] ===========================


export const Modifier_Impacts = (id, desc, type, valeur) => {
    let impact = {
        "id": "1",
        "description": desc,
        "type": type,
        "valeur": valeur
    }
    axios.patch(`http://localhost:5000/Impacts/${id}`, impact).then(
        (res) => {
            console.log(res);
        });
}
// Mesures 

// ================= [Ajouter Mesures] =================================

export const Ajouter_Mesures = (id,occ,type,valeur,ordrep,solution) => {
    let mesures = {
        "id": id,
        "occ" : occ,
        "type": type,
        "valeur": valeur,
        "ordrep" : ordrep,
        "solution" : solution
        
        }
    axios.post(`http://localhost:5000/Mesures`, mesures).then(
        (res) => {
            console.log(res.data);
        });
}
// ===================== [Supprimer Mesures] ===========================

export const Supprimer_Mesures = (id) => {
    axios.delete(`http://localhost:5000/Mesures/${id}`).then(
        (res) => {
            console.log(res);
        });
}
// ===================== [Modifier Mesures] ===========================


export const Modifier_Mesures =(id,occ,type,valeur,ordrep,solution)=> {
    let mesures = {
        "id": id,
        "occ" : occ,
        "type": type,
        "valeur": valeur,
        "ordrep" : ordrep,
        "solution" : solution
    }
    axios.patch(`http://localhost:5000/Mesures/${id}`, mesures).then(
        (res) => {
            console.log(res);
        });
}