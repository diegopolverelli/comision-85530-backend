import {Command, Option} from "commander"

const programa=new Command()

programa.option("-p, --port <PORT>", "Puerto donde estará escuchando el server", 3000)
programa.option("-d, --debug", "Activa modo DEBUG")
programa.option("-c, --colors [COLORS...]", "Lista de colores")
programa.requiredOption("-u, --user <USER>", "Usuario que ejecuta el script")

programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["dev", "test", "prod"]).default("dev"))

programa.parse()

const opts=programa.opts()

console.log(opts)

let {debug}=opts
if(debug){
    console.log(`Muestro logs detallados...`)
}