import mongoose from "mongoose"

const productSchema= new mongoose.Schema({
    description:{
        type:String,
        required:[true,"Need to enter description"],

    },
    name:{
        type:String,
        required:[true,"Need to enter name"],

    },
    productImage:{
        type:String,
        required:[true,"Image string is necessary"]

    },
    price:{
        type:Number,
        required:[true,"Enter the price"]

    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"

    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }

    }




    
,{timestamps:true})

export const Product= mongoose.model("Product",productSchema)