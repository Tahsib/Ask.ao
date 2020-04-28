import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuesSchema = new Schema({
    ques : {
        type: String,
        required: true
    },
    answer : {
        type:String
    },
    name : {
        type: String
    },
    isAnswered : {
        type: Boolean,
        default: false
    },
    created_at : {
        type: Date,
        default: Date.now
    }
});