const express = require('express');
const {PORT} = require('./constants')
const db = require('./config/db')
const app = express();

const { Bot } = require('./models/bot')
const { Conversation } = require('./models/conversation')
const { User } = require('./models/user')
const { EndUser } = require('./models/end_user')

app.get('/', (req, res)=>{
    return res.send("Running conversation bot server");
})

app.listen(PORT,async ()=>{
    
    
    Bot.belongsTo(User,{
        onDelete: 'CASCADE'
    })
    
    Conversation.belongsTo(EndUser,{
        onDelete: 'CASCADE',
    })
    Conversation.belongsTo(Bot, {
        onDelete: 'CASCADE',
    })
    Bot.hasMany(Conversation)
    User.hasMany(Bot)
    EndUser.hasMany(Conversation)
    
    
    await db.authenticate();
    Bot.sync({force:true})
    Conversation.sync({force:true})
    User.sync({force:true})
    EndUser.sync({force:true})
    
    console.log(`starting conversation bot server on port ${PORT}`)
})
.on('close', ()=>{
    sequelize.close()
})