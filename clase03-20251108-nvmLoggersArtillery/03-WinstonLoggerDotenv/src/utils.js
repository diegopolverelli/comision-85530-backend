import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

let tranporteLogWarning=new winston.transports.File(
    {
        level: "warn", 
        filename: "./src/logs/warning.log",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        )
    }
)

const MODE="dev"
export const logger=winston.createLogger(
    {
        transports: [
            new winston.transports.Console(
                {
                    level: MODE=="dev"?"silly":"warn", 
                    format: winston.format.combine(
                        winston.format.timestamp(), 
                        winston.format.colorize(), 
                        winston.format.simple()
                    )
                }
            ), 
            new winston.transports.File(
                {
                    level: "error", 
                    filename: "./src/logs/error.log",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            )
        ]
    }
)


if(MODE=="test"){
    // console.log(`ingresó`)
    logger.add(tranporteLogWarning)
}

export const middLogger=(req, res, next)=>{
    req.logger=logger

    next()
}


const logger2=winston.createLogger(
    {
        levels: {grave:0, medio:1, leve: 2, info:3 },
        transports:[
            new winston.transports.Console(
                {
                    level: "leve", 
                    format: winston.format.combine(
                        winston.format.timestamp(), 
                        winston.format.colorize(
                            {
                                colors:{grave:"red", medio:"yellow", leve: "green", info:"blue" }
                            }
                        ), 
                        winston.format.simple()
                    )                    
                }
            )
        ]
    }
)

logger2.grave("prueba error grave")
logger2.medio("prueba error medio")
logger2.leve("prueba error leve")
logger2.info("prueba error info")