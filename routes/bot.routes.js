const express = require('express')

const router = express.Router()
const {create_bot, get_all_bot, get_single_bot, update_bot, delete_bot} = require('../controllers/bot')

router.post('/users/:userId/chatbots', create_bot)
router.get('/users/:userId/chatbots',get_all_bot)
router.get('/chatbots/:chatbotId', get_single_bot)
router.put('/chatbots/:chatbotId', update_bot)
router.delete('/chatbots/:chatbotId', delete_bot)

module.exports = router