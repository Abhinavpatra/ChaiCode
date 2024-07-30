import mongoose from "mongoose"

const patientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:[true,"Enter the address"]

    },
    age:{
        type:Number,
        default:0
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    }


    
},{timestamps:true});

export const Patient= new mongoose.model("Patient",patientSchema);