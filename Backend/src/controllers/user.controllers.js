import User from "../models/user.Model.js"
import apiError from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import uploadFileInCloudinary from "../utils/cloudinary.js"


export const generateAccessAndRefereshTokens = async (userId) => {
   try {
     const user = await User.findById(userId);
     const accessToken = user.generateAccessToken();
     const refreshToken = user.generateRefreshToken();
 
     user.refreshToken = refreshToken;
     await user.save({ validateBeforeSave: false });
 
     return { accessToken, refreshToken };
   } catch (error) {
     throw new apiError(
       500,
       "Something went wrong while generating referesh and access token",
     );
   }
 };

export const registerUser = asyncHandler( async(req,res) =>{
      console.log(req.body)
   const {fullname,username,password,email} = req.body;
  
   if(
      [fullname,username,password,email].some((field)=>field.trim() === "")
   ){
      throw new apiError(400,"All fields are required",);
   }

   const existingUser = await User.findOne({email});
   
   if(existingUser){
      throw new apiError(400,"This account already exist!");
   }

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
   
  const avatar = await  uploadFileInCloudinary(avatarLocalPath);
  
  if (!avatar) {
   throw new apiError(400, "Avatar is not filled with proper way");
 }

 const newUser = await User.create({
   fullname,
   username,
   email,
   password,
   avatar:avatar.url
 });

 const resisteredUser = await User.findOne({_id:newUser._id}).select(
   "-password -refreshToken",
 );

 if(!resisteredUser){
   throw new apiError(400, "Something went wrong while resistering user")
 }

res.status(200).json(new apiResponse(200, createdUser, "You are successfully registered"))

})

export const loginUser = asyncHandler( async (req,res)=>{

  const {email,password} = req.body;
  
  if([email,password].some((field)=>field?.trim()==="")){
   throw new apiError(400,"Both filed are required");
  }
  
  const existedUser = await User.findOne({email}).select("-password -refreshToken")

  if(!existedUser){
   throw new apiError(400,"This user not exist")
  }

  const value = await existedUser.isCurrectPassword(password);

  if (!value) {
    throw new apiError(400, "Email or Password is Incurrect");
  }

  const {accessToken,refreshToken} = await generateAccessAndRefereshTokens(existedUser._id)

  const loggedInUser = await User.findById(existedUser._id).select(
   "-password -refreshToken",
 );

 const options = {
   httpOnly: true,
   secure: true,
 };

 res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new apiResponse(
        201,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully",
      ),
    );


}


)

export const logOutUser = asyncHandler(async (req, res) => {
   await User.findOneAndUpdate(
     { _id: req.user._id },
     {
       $set: { refreshToken: undefined },
     },
     { new: true },
   );
 
   const options = {
     httpOnly: true,
     secure: true,
   };
 
   res
     .status(201)
     .clearCookie("accessToken", options)
     .clearCookie("refreshToken", options)
     .json(new apiResponse(2001, {}, "User logged out"));
 });
 
 export const changeCurrentPassword = asyncHandler(async (req, res) => {
   const { oldPassword, newPassword } = req.body;
 
   if (!newPassword && !newPassword) {
     throw new apiError(401, "oldPassword or newPassword is required");
   }
 
   const user = await User.findById(req.user._id);
   const value = await user.isCurrectPassword(oldPassword);
 
   if (!value) {
     throw new apiError(401, "Invalid old Password");
   }
 
   user.password = newPassword;
   await user.save({ validateBeforeSave: false });
 
   res
     .status(200)
     .json(new apiResponse(200, {}, "password changed successfully"));
 });

 export const getCurrentUser = asyncHandler(async (req, res) => {
   return res
     .status(200)
     .json(new apiResponse(200, req.user, "This is current user"));
 });


 export const updateUserDetails = asyncHandler(async (req, res) => {
   const { fullname, email } = req.body;
 
   if (!fullname || !email) {
     throw new apiError(401, "Fullname or Email required");
   }
 
   const user = await User.findById(req.user._id);
 
   user.fullname = fullname;
   user.email = email;
   await user.save({ validateBeforeSave: false });
 
   res
     .status(200)
     .json(new apiResponse(200, {}, "User Details Changed Successfully"));
 });

 export const updateAvatar = asyncHandler(async (req, res) => {
   const avatarLocalPath = req.files?.path;
 
   if (!avatarLocalPath) {
     throw new apiError(401, "Avatar is required!");
   }
 
   const avatar = await uploadFileInCloudinary(avatarLocalPath);
 
   if (!avatar) {
     throw new apiError(400, "Avatar is not filled with proper way");
   }
 
   const user = await User.findById(req.user._id);
 
   user.avatar = avatar.url;
   await user.save();
 
   res.status(200).json(new apiResponse(200, {}, "Avatar changed successfully"));
 });
 






export const test = (req,res)=>{

   res.status(200).json({
    success:true,
    message:"Congrats it is working!"
   })

}