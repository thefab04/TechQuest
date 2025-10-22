const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        emailOrMobile:{type:String,required:true,unique:true},
        password:{type:String,required:true},
    }
);

module.exports=mongoose.model("User",userSchema);

