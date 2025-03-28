import { fileURLToPath } from 'url';
import express from 'express';
import userModel from '../../models/user_model.js';
import bcrypt from 'bcrypt';
import bucket from '../../config/firebase-connection.js';
import path from 'path';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
          }

          const filePath = path.join(__dirname,'../../public/images/uploads', req.file.filename);
          const destination = `uploads/${req.file.filename}`; // Firebase destination path
      
          // Upload file to Firebase Storage
          await bucket.upload(filePath, {
            destination,
            metadata: {
              contentType: req.file.mimetype,
            },
          });
      
          // Delete the file from the local server after upload
          fs.unlinkSync(filePath);

        let {phoneNumber,fullName} = req.body;
        // let user = await userModel.findOne({ email });
        // if (user) return res.status(409).send('User Already exists');

        let createdUser = await userModel.create({
            phoneNumber,
            fullName,
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