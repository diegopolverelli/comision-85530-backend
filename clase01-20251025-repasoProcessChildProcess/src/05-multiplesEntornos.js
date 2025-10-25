import express from 'express';
import { config } from './config/config.js';
import mongoose from "mongoose"
// const PORT=3000;
// const PORT=process.env.PORT;
const PORT=config.general.PORT

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


try {
    await mongoose.connect(
        config.database.MONGO_URL, 
        {
            dbName: config.database.DB_NAME
        }
    )
    console.log(`Conectado OK a db ${config.database.DB_NAME}`)
} catch (error) {
    console.log(`Error al conectar DB... ${error.message}`)
}
