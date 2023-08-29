const { Bot } = require('../models/bot')
const { User } =  require('../models/user')

const create_bot = async (req, res) => {
    try {
        const name = req.body.firstName
        const description = req.body.description
        const userId = req.body.userId
        const user = await User.findByPK(userId)
        const bot = await Bot.create({name: name, description: description, user:user})

        res.status(200).json({message:"created new bot successfully", bot:bot});
    } catch (error) {
        res.status(400).json({error: "unable to create bot"});
    }
}

const get_all_bot = async (req, res) => {
    try {
        const allbot = await Bot.findAll()

        res.status(200).json({message:"created new bot successfully", allbot: allbot});
    } catch (error) {
        res.status(400).json({error: "unable to fetch bots"});
    }
}

const get_single_bot = async (req, res) => {
    try {
        const id = req.params.id
        const bot = await Bot.findByPK(id)

        res.status(200).json({message:"created new bot successfully", bot:bot});
    } catch (error) {
        res.status(400).json({error: "unable to fetch bot details"});
    }
}

const update_bot = async (req, res) => {
    try {
        const id = req.params.id
        const bot = await Bot.update(req.body,{
            where:{
                id:id
            }
        })
        res.status(200).json({message:"created new bot successfully", bot:bot});
    } catch (error) {
        res.status(400).json({error: "unable to update bot"});
    }
}

const delete_bot = async (req, res) => {
    try {
        const id = req.params.id
        await Bot.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"created new bot successfully"});
    } catch (error) {
        res.status(400).json({error: "unable to delete bot"});
    }
}

module.exports = {create_bot, get_all_bot, get_single_bot, update_bot, delete_bot}