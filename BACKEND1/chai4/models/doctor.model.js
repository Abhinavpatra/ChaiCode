import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    salary:{
        type:Number,
        required:true,
        default:0,
    },
    gender:{
        type:String,
        enum:["M","F","O"]
    },
    qualifications:{
        type:String,
        required:true,
    },
    experienceInYears:{
        type:Number,
        required:true,
        default:0,

    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            required:true,
            default:"unemployed",
            
        }
    ],


    
},{timestamps:true});

export const Doctor= new mongoose.model("Doctor",doctorSchema);