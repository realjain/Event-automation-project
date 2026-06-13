const mongoose=require('mongoose')
const noticeSchema=mongoose.Schema({
    title:String,
    date_posted:Date,
    deadline:Date,
    description:String,
})
module.exports=mongoose.model('notice',noticeSchema)