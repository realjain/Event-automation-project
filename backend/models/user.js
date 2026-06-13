const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['admin','student'],
        default:'student'
    },
   enrolledEvents: {
    type: [String],
    default: [],
    validate: {
        validator: function (v) {
            if (this.role === "student") return true;
            return v.length === 0; // admin must have empty array
        },
        message: "Only students can have enrolled events"
    }
}


})
module.exports=mongoose.model('user',userSchema)
