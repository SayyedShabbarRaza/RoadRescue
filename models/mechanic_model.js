import mongoose from "mongoose";

const mechanicSchema=mongoose.Schema({
    phoneNumber:Number,
    fullName:{
        type:String,
        minLength:3,
        trim:true
    },
    cnic:Number,
    cnicFront:String,//image
    cnicBack:String,//image
    avatar:String,//image
    email:String,
})

export default mongoose.model("mechanic",mechanicSchema);