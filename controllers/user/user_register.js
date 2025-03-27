import express from 'express';
import userModel from '../../models/user_model.js';
import bcrypt from 'bcrypt';

export default async (req, res) => {
    try {
        let {phoneNumber,fullName} = req.body;
        let user = await userModel.findOne({ email });
        if (user) return res.status(409).send('User Already exists');

        let createdUser = await userModel.create({
            fullName,
            email,
            phoneNumber
        })
        if (!createdUser) return res.status(504).send('something went wrong')
        res.status(200).send({
            "status": 200,
            "message": "User Created Successfully"
        });
    }
    catch (err) {
        res.send(err.message);
    }
}