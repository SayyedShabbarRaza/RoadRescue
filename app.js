import express from 'express';
import mechanicRouter from './routes/mechanic_router.js';
import userRouter from './routes/user_router.js';
import db from './config/mongoose-connection.js';
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


                //Routers
app.use('/mechanic',mechanicRouter);
app.use('/user',userRouter);

app.listen(3000);