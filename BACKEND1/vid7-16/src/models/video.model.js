import mongoose, { mongo } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"



const videoSchema= new mongoose.Schema({
    videoFile:{
        type:String, //cloudinary url
        required:true,


    },
    thumbnail:{
        type:String,// cloudinary url
        required:true
    },
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true

    },
    duration:{
        type:Number,// cloudinary url
        required:true

    },
    views:{
        type:Number,
        default:0,
        required:true,

    },
    isPublished:{
        type:Boolean,
        required:true,
        default:false,

    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

    }



}, {
    timestamps:true
})

videoSchema.plugin(mongooseAggregatePaginate)

// mongooseAggregatePaginate is a plugin that adds pagination capability to aggregation queries
// It is used to paginate the results of queries on the video model

export const Video= mongoose.model("Video", videoSchema)