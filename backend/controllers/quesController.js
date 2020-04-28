import mongoose from 'mongoose';
import {QuesSchema} from '../models/quesModel';

const Ques = mongoose.model('Ques',QuesSchema);

export const addQues = (req,res) => {
    const newQues = new Ques(req.body);
    newQues.save((err,ques)=>{
        if(err) res.send(err);
        res.json(ques);
    });
}

export const allQues = (req,res) => {
    Ques.find({isAnswered : 0},(err,ques)=>{
        if(err) res.send(err);
        res.json(ques);
    })
}

export const ques = (req,res) => {
    Ques.findById(req.params.ques_id,(err,ques)=>{
        if(err) res.send(ques);
        res.json(ques);
    })
}

export const giveAns = (req,res)=>{
    Ques.findOneAndUpdate({_id: req.params.ques_id},req.body,{new:true},(err,ques_ans)=>{
        if(err) res.send(err)
        res.json(ques_ans)
    });
}

export const quesWithAns = (req,res) => {
    Ques.find({isAnswered : 1},(err,ques)=>{
        if(err) res.send(ques);
        res.json(ques);
    })
}
