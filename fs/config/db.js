const mongoose = require('mongoose')

const dbURL = process.env.db

mongoose.connect(dbURL)

mongoose.connection.on('connected',()=>
{
    console.log('Mongoose Connected!')
})

mongoose.connection.on('disconnected',()=>
{
    console.log('Mongoose Disconnected')
})

mongoose.connection.on('error',(err)=>
{
    console.log(`Error! while connected to :${err}`)
})