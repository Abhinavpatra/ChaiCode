import mongoose from "mongoose"

const orderSchema= new mongoose.Schema({
    price:{
        type:Number,
        required:true

    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    orderItems:{
        type:[
            {
              type:string,
              required:[true, "Enter the items"]

            }  
        ]
    },
    address:{
        type:String,
        required:true

    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }

},{timestamps:true})

export const Order= mongoose.model("Order",orderSchema);