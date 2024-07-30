import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,

    },
    password:{
        unique:false,
        type:String,
        minlength:8,

    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true

    }


},{timestamps:true });

export const User= mongoose.model("User",userSchema);