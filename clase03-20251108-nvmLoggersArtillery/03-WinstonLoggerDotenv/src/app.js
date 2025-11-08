import __dirname, { logger, middLogger } from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(middLogger)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)
app.use('/api/heroes', heroesRouter)

app.get("/testLogger", (req, res)=>{
    logger.error(`prueba error - ${req.url} - ${req.method}`)
    logger.log("error", "prueba error")

    logger.warn("prueba warn")

    logger.info("prueba info")
    logger.log("info", "prueba info")

    logger.http("prueba http")
    logger.verbose("prueba verbose")
    logger.debug("prueba debug")
    logger.silly("prueba silly")
    

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`Logger testeado...!!!`});
})

const server=app.listen(PORT,()=>{
    // console.log(`Server escuchando en puerto ${PORT}`);
    logger.info(`Server escuchando en puerto ${PORT}`)
});
