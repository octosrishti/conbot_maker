const { EndUser } = require('../models/user')

const create_user = async (req, res) => {
    try {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.email
        const user = await EndUser.create({firstName: firstName, lastName: lastName, email: email})

        res.status(200).json({message:"created new user successfully", user:user});
    } catch (error) {
        res.status(400).json({error: "unable to create user"});
    }
}

const get_all_user = async (req, res) => {
    try {
        const allUser = await EndUser.findAll()

        res.status(200).json({message:"created new user successfully", allUser: allUser});
    } catch (error) {
        res.status(400).json({error: "unable to fetch users"});
    }
}

const get_single_user = async (req, res) => {
    try {
        const id = req.params.id
        const user = await EndUser.findByPK(id)

        res.status(200).json({message:"created new user successfully", user:user});
    } catch (error) {
        res.status(400).json({error: "unable to fetch user details"});
    }
}

const update_user = async (req, res) => {
    try {
        const id = req.params.id
        const user = await EndUser.update(req.body,{
            where:{
                id:id
            }
        })
        res.status(200).json({message:"created new user successfully", user:user});
    } catch (error) {
        res.status(400).json({error: "unable to update user"});
    }
}

const delete_user = async (req, res) => {
    try {
        const id = req.params.id
        await EndUser.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"created new user successfully"});
    } catch (error) {
        res.status(400).json({error: "unable to delete user"});
    }
}

module.exports = {create_user, get_all_user, get_single_user, update_user, delete_user}