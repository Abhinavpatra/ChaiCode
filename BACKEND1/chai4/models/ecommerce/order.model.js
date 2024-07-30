import mongoose, { mongo } from "mongoose";

const orderItemSchema= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true,
        default:0,

    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    }
    

})

const orderSchema= new mongoose.Schema({
    // category:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Category"
    // },
    // quantity:{
    //     type:Number,
    //     required:true,
    //     default:0,
    // },
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema],

        
    }

}, {
    timestamps:true

    });

const Order= new mongoose.model("Order",orderSchema);