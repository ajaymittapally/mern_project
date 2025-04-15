import jwt from "jsonwebtoken";


export const authUser= async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.json({success:false,message:"Not Autherized"})
    }
    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
            return next();
            
        }else{
            return res.json({success:false,message:"Not Autherized"})
        }
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message});
        
    }
}

export default authUser;