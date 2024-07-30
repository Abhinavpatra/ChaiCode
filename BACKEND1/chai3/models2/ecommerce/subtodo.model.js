import mongoose from "mongoose";

const subTodoSchema= new mongoose.Schema({
    content:{
        type:String,
        require:true,

    },
    complete:{
        type:Boolean,
        required: true,

    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }

})