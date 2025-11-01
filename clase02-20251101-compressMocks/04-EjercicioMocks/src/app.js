import express from 'express';
import mongoose from "mongoose"
import { router as mocksRouter } from './routes/mocks.router.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/mocks", mocksRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


try {
    await mongoose.connect(
        "mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
        {
            dbName: "comisPruebas"
        }
    )
    console.log("DB online!")
} catch (error) {
    console.log(`Error al conectar a DB...`)
}