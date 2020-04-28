import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {AdminSchema} from '../models/adminModel'

const Admin = mongoose.model('Admin',AdminSchema);

export const register = (req,res)=>{
    const newAdmin = new Admin(req.body);
    newAdmin.hashPassword = bcrypt.hashSync(req.body.password,10);
    newAdmin.save((err,user)=>{
        if(err){
            return res.status(400).send({
                message: err
            })
        }
        else{
            newAdmin.hashPassword = undefined;
            res.send(user)
        }
    });
}

export const login = (req,res) => {
    Admin.findOne({email:req.body.email},(err,user)=>{
        if(err) throw err;
        if(!user){
            res.status(401).json({message:"Auth failed, No user found"});
            console.log('No user');
            
        }
        else if(user){
            if(!user.comparePassword(req.body.password,user.hashPassword)){
                res.status(401).json({message:"Auth failed, wrong password"});
                console.log('wrong pass');
                
            }
            else{
                return res.send("success");
            }
        }
    });
}