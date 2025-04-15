//place order COD: /api/order/cod

import order from "../models/order.js"
import Product from "../models/Product.js"

export const placeOrderCOD = async (req,res)=>{
    try {
        const {userId,items,address}= req.body
        if(!address || items.lenght ===0){
            return res.json({success:false,message:"Invalid data"})
        }
        //calculate amount using items
        let amount = await items.reduce(async (acc,item)=>{
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        },0)

        //Add tax charge
        amount += Math.floor(amount*0.02)
        await order.create({
            userId,
            items,
            amount,
            address,
            paymentType:"COD"
        })
        return res.json({success:true,message:"Order placed successfully"})
    } catch (error) {
        return res.json({succes:false,message:error.message})
    }
}

//Get Orders by user Id:/api/order/user

export const getUserOrders = async (req,res)=>{
    try {
        const {userId} = req.body
        const orders = await order.find({
            userId,
            $or:[
                {paymentType:"COD"},
                {isPaid:true}
            ]
        }).populate("items.product address").sort({createdAt:-1});
        res.json({success:true,orders});
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

//Get all orders (for seller/admin):/api/order/seller
export const getAllOrders = async (req,res)=>{
    try {
        
        const orders = await order.find({
            
            $or:[
                {paymentType:"COD"},
                {isPaid:true}
            ]
        }).populate("items.product address").sort({createdAt:-1});
        res.json({success:true,orders});
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}
