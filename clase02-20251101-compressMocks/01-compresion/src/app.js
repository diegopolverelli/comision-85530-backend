import express from 'express';
import handlebars from 'express-handlebars'
import compression from "express-compression"
import zlib from "zlib"

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(compression())
// app.use(compression({zlib:{level:5}}))
app.use(compression({brotli:{enabled:true}}))
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/texto1',(req,res)=>{

    let dato=`texto muuuuuuy muuuuuuuuuuuuuy largo... `.repeat(100000)
    // let datoComprimido=zlib.gzipSync(dato, {level:9})
    let datoComprimido=zlib.brotliCompressSync(dato)

    res.setHeader('Content-Type','text/plain');
    // res.setHeader("Content-Encoding", "gzip")
    res.setHeader("Content-Encoding", "br")
    res.status(200).send(datoComprimido);
})

app.get('/heroes',(req,res)=>{

    res.render("prueba")
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
