require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../database/db");


const followNewFriend = async (idObject) =>{
    try {
        await db.knex
        .insert(idObject)
        .into("friendships")
        .then((resp) =>{
            console.log(resp)
            console.table(resp)
        }
        ); 
    } catch (error) {
        console.log(error)
    }
}

module.exports = {followNewFriend}