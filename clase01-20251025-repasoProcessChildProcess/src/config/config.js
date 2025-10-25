import {Command, Option} from "commander"

let program=new Command()

program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del server").choices(["dev", "prod"]).default("dev"))

program.parse()
const opts=program.opts()

const {mode}=opts

// let mode="DEV"
// process.loadEnvFile("./.env")
process.loadEnvFile(mode=="prod"?"./.env.prod":"./.env.dev")

export const config={
    general:{
        PORT: process.env.PORT, 
        SECRET: process.env.SECRET, 
        
    }, 
    database: {
        MONGO_URL: process.env.MONGO_URL, 
        DB_NAME: process.env.DB_NAME,

    }

}