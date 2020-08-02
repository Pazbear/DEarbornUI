const express = require('express')
const router = express.Router()
const multer = require('multer')
const mkdirp = require('mkdirp')

const {auth} = require('../middleware/auth')

const {Product} =require('../models/Product')

var storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        mkdirp(`/uploads/${req.body.nickname}`, function(err){
            if(err) console.error(err)
        })
        cb(null, `uploads/${req.body.nickname}`)
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
      },
      fileFilter: (req, file, cb) => {
   
          const ext = path.extname(file.originalname)
          if(ext !== '.jpg' || ext !== '.png' || ext !== '.gif'){
              return cb(res.status(400).end('only jpg, png, gif are allowed'), false);
          }
          cb(null, true)
        }
})

var upload = multer({storage : storage}).single("file")

router.post("/uploadImagesInArticle", (req, res)=>{

    upload(req, res, err => {
        if(err) return res.status(400).json({uploaded: false, error: { message : "could not uploaad this image"}})
        return res.status(200).json({uploaded:true, url:`http://localhost:5000/${res.req.file.path}/${res.req.file.filename}`})
    })
})

module.exports = router