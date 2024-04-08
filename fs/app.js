const app = require('express')()
const bodyparser=require('body-parser')
const cors=require('cors')
 app.use(bodyparser.urlencoded({extended:true}))
 app.use(bodyparser.json()) 

 app.use(cors())
const port = 2222;


require('dotenv').config()
require('./config/db')
require('./routes/router')(app)

app.listen(port,()=>
{
    console.log(`The server is listening on port: ${port}`)
})