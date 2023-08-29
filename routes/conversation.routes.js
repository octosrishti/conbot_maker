const express = require('express')

const router = express.Router()
const {create_conversation, get_all_conversation, get_single_conversation, update_conversation, delete_conversation} = require('../controllers/conversation')

router.post('/', create_conversation)
router.get('/',get_all_conversation)
router.get('/:id', get_single_conversation)
router.put('/:id', update_conversation)
router.delete('/:id', delete_conversation)

module.exports = router