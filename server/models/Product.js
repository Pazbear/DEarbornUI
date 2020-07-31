const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = mongoose.Schema({
    writer : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
        type : String,
        maxlength : 50,
        text : true,
    },
    description : {
        type : String
    },
    
})