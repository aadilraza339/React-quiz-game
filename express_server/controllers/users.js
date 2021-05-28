
const knex = require('../model/query')

const inser_candidat = (req, res,) => {
    req.body['Today'] = new Date();
    knex.inser_user(req.body)
    .then((data)=>{
		res.status(200).json(data)
	})
	.catch((err)=>{
		res.status(400).json(err)
	})

}

const get_detail = (req, res,) => {
    knex.get_details()
    .then((data)=>{
        res.status(200).json(data)
    })
}
module.exports = {  
    inser_candidat,
    get_detail
  };