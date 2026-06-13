const mongoose=require('mongoose');
const orgnizerSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    ourevents:{
        type:[String],
        default:[],
    },
    role:{
        type:String,
        default:'organizer',
    }

})
module.exports=mongoose.model('organizer',orgnizerSchema)