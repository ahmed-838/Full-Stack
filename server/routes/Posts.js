    const express = require('express');
    var router = express.Router();
    const { Posts } = require('../models')

    
    router.get("/", async (req, res)=>{
        const listOfPosts = await Posts.findAll()
        res.json(listOfPosts)
    })

    router.post("/",async(req,res)=>{
        const post = req.body
        
        await Posts.create(post)
        res.send(post)
    })

    module.exports = router