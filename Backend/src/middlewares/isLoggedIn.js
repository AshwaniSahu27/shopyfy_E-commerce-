import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import User from "../models/user.Model.js";

const isLoggedIn = asyncHandler( async (req,_, next) => {

  try {

    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");


    if (!token) {
      throw new apiError(400, "Unauthorized access!!");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE);

    const user = await User.findOne({ _id: decoded._id }).select(
      "-password -refreshToken",
    );

    if(!user){
        throw new apiError(401,"Invalid access token")
    }

    req.user = user;
    next();


  } catch (error) {
    throw new apiError(401, error?.message || "Invalid access token")
  }
}

);


export default isLoggedIn;
