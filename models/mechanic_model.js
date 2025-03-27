import mongoose from "mongoose";

const mechanicSchema=mongoose.Schema({
    phoneNumber:Number,
    fullName:{
        type:String,
        minLength:3,
        trim:true
    },
    cnic:Number,
    cnicFront:String,
    cnicBack:String,
    avatar:String,
    email:String,
})

export default mongoose.model("mechanic",mechanicSchema);