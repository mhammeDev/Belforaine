//admin.service.js

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..','datasource/users.json');
const pool = require("../database/db.js");

async function loginUser(login,password){
    const client = await pool.connect();
    try{
        const query = `SELECT * from utilisateur where login=$1 and password=$2;`;
        res = await client.query(query,[login,password]);
        console.log("Connexion réussi");
        return res.rows[0];
    }catch(err){
        console.log("Connexion échoué")

    }finally{
        client.release();
    }
}

module.exports = {
    loginUser : loginUser,
}