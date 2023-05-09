const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
   type:String,
   required:false
  },
  author:{
    type:String,
    required:true
   },
   tags:[{
    type:String,
    
   }],
   createdAt:{
    type:Date,
    default:new Date()
   }


});

module.exports =  mongoose.model("Post" , PostSchema)