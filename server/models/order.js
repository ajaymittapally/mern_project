import mongoose from "mongoose";


const orderSchmena = new mongoose.Schema({
    userId:{type:String,requried:true,ref:'user'},
    items:[{
        product:{type:String,requried:true,ref:'product'},
        quantity:{type:Number,requried:true}
    }],
    amount:{type:Number,requried:true},
    address:{type:String,requried:true,ref:'address'},
    status:{type:String,default:"Order Placed"},
    paymentType:{type:String,requried:true},
    isPaid:{type:Boolean,requried:true,default:false},
},{timestamps:true})


const order = mongoose.models.order || mongoose.model('/order',orderSchmena)

export default order;