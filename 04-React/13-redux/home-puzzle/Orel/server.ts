import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import ImagesRouter from './API/Image/imageRouter'
dotenv.config()

const app = express()
const URI = process.env.MONGODB_URI
const PORT = process.env.PORT


if(URI){
mongoose.connect(URI).then(()=>{
    console.log("DB connected")
})
.catch(err=>console.error(err))
}else{
    console.error("no found URI")
}

app.use(express.json());
app.use(express.static('client'));
app.use('/api/images/' , ImagesRouter)

app.get('/' , (req:any, res:any) =>{
try {
    
} catch (error:any) {
    console.error({success:false , message:error.message})
}
})


app.listen(PORT  , ()=>{
    console.log(`the server connected to PORT :${PORT}`)
})