const express = require('express')
const app = express()
const db = require('./models')
const cors  = require('cors')

 
app.use(express.json()) // Middleware para parsear
app.use(cors())


//Routers
const postRouter = require('./routes/Posts')
app.use("/posts",postRouter)










db.sequelize.sync()
.then(()=>{
    
    const port = 3001
    app.listen(port, ()=>{
        console.log(`Server Is Running On Port : ${port}`)
    })
})