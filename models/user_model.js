import mongoose, { Mongoose } from 'mongoose';

const userSchema = mongoose.Schema({
    phoneNumber: String,
    fullName:{
        type:String,
        minLength:3,
        trim:true
    },
    avatar:String,//image
})

export default mongoose.model('user', userSchema);