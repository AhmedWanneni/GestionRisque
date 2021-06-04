import axios from 'axios';

export const Afficher_Sessions = async () => {

    let res = await axios.get(`http://localhost:5000/Sessions`);
    return res.data;
}
export const Afficher_Actifs = async () => {

    let res = await axios.get(`http://localhost:5000/Actifs`);
    return res.data;
}
export const Afficher_Actifs_Session = async (id_session) => {

    let res = await axios.get(`http://localhost:5000/Actifs/id_session/${id_session}`);
    return res.data;
}
export const Afficher_Vulnerabilite = async () => {

    let res = await axios.get(`http://localhost:5000/Vulnerabilites`);
    return res.data;
}
export const Afficher_Menaces = async () => {

    let res = await axios.get(`http://localhost:5000/Menaces`);
    return res.data;
}
export const Afficher_Impacts = async () => {

    let res = await axios.get(`http://localhost:5000/Impacts`);
    return res.data;
}
export const Afficher_Risques = async () => {

    let res = await axios.get(`http://localhost:5000/Risques`);
    return res.data;
}




