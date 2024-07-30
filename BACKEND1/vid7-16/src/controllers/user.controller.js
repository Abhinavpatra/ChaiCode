import { ApiError } from '../utils/ApiError.js'
import {asyncHandler} from '../utils/aysnchandler.js'
import {User} from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'


    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


const registerUser= asyncHandler(async(req,res)=>{
    const {fullName,email,username,password}= req.body
    console.log(req.body)
    console.log("email and full name ", email,fullName) 

 
    if(
        [fullName,email,username,password].some((field)=> field?.trim()==="")

    ){
        console.log("send stuff");
        throw new ApiError(400,"All fields are required");

        // return res.status(200).json({
        //     message:"i am not ok bro, something is absent"
        // })
    }
     const existedUser= User.findOne({
        $or:[
            {email},
            {username}
        ]
                

     })

     if(existedUser){
        throw new ApiError(409,"User already exists")   
     }
     const avatarLocalPath= req.files?.avatar[0].path;
     const coverImageLocalPath=req.files?.coverImage[0]?.path;
     if (!avatarLocalPath) {
        throw new ApiError(400, "Please upload an avatar, it is required")
        
     }

     // await it anyways in case of a delay
     const avatar=await uploadOnCloudinary(avatarLocalPath);
     const coverImage=await uploadOnCloudinary(coverImageLocalPath);
     // await it anyways in case of a delay

     if(!avatar){
        throw new ApiError("409","Avatar upload failed")
     }

    const user= await User.create({
        fullName,
        email,
        username:username.toLowerCase(),
        password,
        avatar:avatar.url,//sends just the url of the avatar
        coverImage:coverImage?.url || "", // since we haven't checked whether cover 
        // image is present or not, we do that here before uploading the image url
     })
     // once the user is created we are checking here whether the user has been created or not.


    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    // if empty that means nothing was returned and the user doesnt exist

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )


    // return res.status(201).json({
    //     message:"i am ok bro"
    // })
} )

export {registerUser} 

//user.controller.js