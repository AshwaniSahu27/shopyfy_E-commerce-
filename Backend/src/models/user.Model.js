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
    avatar:{
        type:String,
    },
    refreshToken:{
      type:String
    },
    isAdmin:{
        type:Boolean,
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


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    
    this.password = await bcrypt.hash(this.password, 10);
    
    next();
})


userSchema.methods.isCurrectPassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken = function(){
   return jwt.sign({ email: this.email, _id: this._id }, process.env.ACCESS_TOKEN_SECRETE,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.generateRefreshToken = function(){
   return jwt.sign({ email: this.email, _id: this._id }, process.env.REFRESH_TOKEN_SECRETE,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}


const User  = mongoose.model("User",userSchema);
export default User; 