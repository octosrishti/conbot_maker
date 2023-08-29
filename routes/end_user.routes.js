const express = require('express')

const router = express.Router()
const {create_user, get_all_user, get_single_user, update_user, delete_user} = require('../controllers/user')

router.post('/', create_user)
router.get('/',get_all_user)
router.get('/:id', get_single_user)
router.put('/:id', update_user)
router.delete('/:id', delete_user)

module.exports = router