import mongoose from "mongoose"

const categorySchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,

    },
    colour:{
        type:String,
        required:true

    },

    

    },{timestamps:true});

export const Category= mongoose.model("Category",categorySchema);

//even if we write categories, it will still store it as categories, it is automatically intelligent like that
