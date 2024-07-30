import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    addressLine1:{
        type:String,
        required:true,
    },
    addressLine2:{
        type:String,
        required:false,
    },//*
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },//string
    specializedIn:[{
        type:String,
        required:true,
        

    }],
    // the specialized in stores an array with the properties as in the braces.


    
},{timestamps:true});

export const Hospital= new mongoose.model("Hospital",hospitalSchema);