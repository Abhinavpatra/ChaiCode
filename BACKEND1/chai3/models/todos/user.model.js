import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:3,
        
    },

    password:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:8,
        
    }

}, {timestamps:true});
export const User= mongoose.model("User", userSchema)

// in the databse it will be stored as, lowercased and plural
// users    