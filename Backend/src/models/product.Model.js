import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
}, {
    timestamps: true
});

const productSchema = mongoose.Schema({
  
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    numReview:{
        type:Number,
        default:0
    },
    countInStock:{
       type:Number,
       defualt:0    
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    review:[reviewSchema],

},{timestamps:true})


const Product  = mongoose.model("Product",productSchema); 
export default Product; 