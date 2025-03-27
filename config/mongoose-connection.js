import mongoose from 'mongoose';
import env from 'dotenv';
env.config();

mongoose.connect(process.env.MONGODB_URI).then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

export default mongoose.connection;