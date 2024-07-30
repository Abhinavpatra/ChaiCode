import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    diagnosis:{
        type:String,
        required:true
        
    },
    addressLine1:{
        type:String,
        required:true

    },
    addressLine2:{
        type:String,
        required:false

    },
    age:{

        type:Number,
        default:0,
        required:false
    },
    bloodGroup:{
        type:String,
        enum:["A+","B+","O+","AB+","A-","B-","O-","AB-"]
    },
    gender:{
        type:String,
        enum:['M','O','F'],

    },
    admitteedIn:{
        type:Date,
        required:true,

    },
    

    
},{timestamps:true});

export const Patient= new mongoose.model("Patient",patientSchema);