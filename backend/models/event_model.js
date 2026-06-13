const mongoose=require('mongoose');
const eventSchema=mongoose.Schema({
    title:String,
    description:String,
    date_posted:Date,
    event_date:Date,
    Location:String,
    RegisteredUsers:[String],
    deadline:Date,
    event_type:String,
    organizer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'organizer'
    }
})
module.exports=mongoose.model('event',eventSchema)