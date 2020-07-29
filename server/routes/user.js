const express = require('express');
const router = express.Router();
const {User} = require("../models/User");


router.post("/register", (req, res)=>{
    const user = new User(req.body)

    user.save((err, doc) => {
        if(err) return res.json({success:false, err})

        return res.status(200).json({
            success: true
        })
    })
})

router.post('/checkEmail', (req, res)=>{
    User.findOne({email : req.body.email}, (err, user)=>{
        if(!user){
            return res.json({
                success:true
            })
        }else{
            return res.json({
                success:false
            })
        }
    })
})

module.exports = router