import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express(); 

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)

mongoose
  .connect(
    "mongodb+srv://sainisuryansh12:DIY5kQZSuXv6huRX@cluster0.3rpsh.mongodb.net/",
    {
      dbName: "MERN_Recipe",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));



//username  - sainisuryansh12
//password - DIY5kQZSuXv6huRX

// mongodb+srv://sainisuryansh12:DIY5kQZSuXv6huRX@cluster0.3rpsh.mongodb.net/