import mongoose from "mongoose";

async function connectDB(){
    try{
        mongoose.connection.on('connected',()=>console.log
        ("Data Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)

    }catch(err){
        console.error(err.message);

    }
}

export default connectDB;