import mongoose, { Mongoose } from  "mongoose";

const userSchema = new mongoose.Model({
    user:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false}
},{timestamp:true,});
const User = mongoose.Model("User",userSchema);
export default User;