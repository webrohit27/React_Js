const Service = require("../models/service-model");

const services = async (req, res) =>{
    try {
        const responce = await Service.find();
        if (!responce) {
            res.status(404).json({msg : "no service found"})
            return;
        }
        res.status(200).json({msg: responce})
    } catch (error) {
        console.log(error);
    }
}


module.exports = services;