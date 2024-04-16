const express =require("express")
const mongoose =require("mongoose")
const dotenv =require("dotenv")
const app = express();
const mainRoute=require("./routes/index.js")
const logger =require("morgan")
const cors =require("cors");

dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    } catch (error) {
        throw error
    }
}

//middlewares 
app.use(logger("dev"))
app.use(express.json())
app.use(cors());


app.use("/api",mainRoute)

app.listen(5000,()=>{
    connect();
    console.log("sunucu 5000 portunda çalışıyor");
})