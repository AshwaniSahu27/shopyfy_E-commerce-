import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  
    Fullname:{
        type:String,
        required:true,

    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
    wishList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
    review:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }]

},{timestamps:true})


const User  = mongoose.model("User",userSchema);
export default User; 