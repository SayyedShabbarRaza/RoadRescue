import express from 'express';
import mechanicModel from '../../models/mechanic_model.js';
import bcrypt from 'bcrypt';

export default async (req, res) => {
    try {
        let {phoneNumber,fullName,cnic} = req.body;
        let mechanic = await mechanicModel.findOne({ email });
        if (mechanic) return res.status(409).send('User Already exists');

        let createdMechanic = await mechanicModel.create({
            phoneNumber,
            fullName,
            cnic,
        })
        if (!createdMechanic) return res.status(504).send('something went wrong')
        res.status(200).send({
            "status": 200,
            "message": "User Created Successfully"
        });
    }
    catch (err) {
        res.send(err.message);
    }
}