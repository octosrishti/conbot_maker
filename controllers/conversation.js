const { Conversation } = require('../models/conversation')
const { EndUser } = require('../models/end_user')

const create_conversation = async (req, res) => {
    try {
        const text = req.body.text
        const endUserId = req.body.end_user
        const end_user = await EndUser.findByPK(endUserId)
        const conversation = await Conversation.create({text:text, end_user:end_user})

        res.status(200).json({message:"created new conversation successfully", conversation:conversation});
    } catch (error) {
        res.status(400).json({error: "unable to create conversation"});
    }
}

const get_all_conversation = async (req, res) => {
    try {
        const end_userId = req.body.end_user
        const end_user = await EndUser.findByPK(end_userId)
        const allconversation = await Conversation.findAll({
            where: {end_user:end_user}
        })

        res.status(200).json({message:"created new conversation successfully", allconversation: allconversation});
    } catch (error) {
        res.status(400).json({error: "unable to fetch conversations"});
    }
}

const get_single_conversation = async (req, res) => {
    try {
        const id = req.params.id
        const conversation = await Conversation.findByPK(id)

        res.status(200).json({message:"created new conversation successfully", conversation:conversation});
    } catch (error) {
        res.status(400).json({error: "unable to fetch conversation details"});
    }
}

const update_conversation = async (req, res) => {
    try {
        const id = req.params.id
        const conversation = await Conversation.update(req.body,{
            where:{
                id:id
            }
        })
        res.status(200).json({message:"created new conversation successfully", conversation:conversation});
    } catch (error) {
        res.status(400).json({error: "unable to update conversation"});
    }
}

const delete_conversation = async (req, res) => {
    try {
        const id = req.params.id
        await Conversation.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"created new conversation successfully"});
    } catch (error) {
        res.status(400).json({error: "unable to delete conversation"});
    }
}

module.exports = {create_conversation, get_all_conversation, get_single_conversation, update_conversation, delete_conversation}