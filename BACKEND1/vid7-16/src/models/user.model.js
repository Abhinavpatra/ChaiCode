import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,

    },
    fullName:{
        type:String,
        required:true,


    },
    avatar:{
        type:String,// will be a cloudinary url
        required:true

    },
    coverImage:{
        type:String,

    },
    watchHistory:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }
],
    password:{
        type:String,
        required:[true,"Password is required"]

    },
    refreshToken:{

    }

},{timestamps:true})

userSchema.pre("save", async (next)=>{
    
    if(!this.modified("password")) next();

  this.password = await  bcrypt.hash(this.password,10)
    next();

})

userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
} 




export const User= mongoose.model("User",userSchema)