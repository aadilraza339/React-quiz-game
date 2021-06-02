const knex=require("./connection")

let inser_user = (data)=>{
    return knex('users').insert(data)
}

let get_details = (data)=>{
    return knex('users').select('*').limit(5).orderBy('wrong')
}

module.exports = {
    inser_user,   
    get_details
};
