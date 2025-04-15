import mongoose from "mongoose";

const addressSchema =new mongoose.Schema({
    userId:{type:String,requried:true},
    firstName:{type:String,requried:true},
    lastName:{type:String,requried:true},
    email:{type:String,requried:true},
    street:{type:String,requried:true},
    city:{type:String,requried:true},
    state:{type:String,requried:true},
    zipcode:{type:Number,requried:true},
    country:{type:String,requried:true},
    phone:{type:Number,requried:true},
})

const Address = mongoose.models.address || mongoose.model('address',addressSchema)

export default Address;