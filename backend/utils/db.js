// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI ,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true  
//         });
//         console.log('mongodb connected successfully');
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }
// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
        console.log("db connection issue " , error);
        
        process.exit(1);
    }
}

export default connectDB;
