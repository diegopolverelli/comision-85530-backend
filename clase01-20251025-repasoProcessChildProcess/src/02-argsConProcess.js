// let {name, password}=req.body

// let [dirNode, rutaScript, ...argumentos]=process.argv  // ... son aquí el operador REST
let [ , , ...argumentos]=process.argv  // ... son aquí el operador REST

// console.log(argumentos)
argumentos=argumentos.map(a=>a.toLowerCase())
let indicePort
indicePort=argumentos.findIndex(a=>a=="--port")
if(indicePort== -1){
    console.log(`El argumento --port <PORT> es obligatorio`)
    process.exit()
}


let PORT=argumentos[indicePort+1]
console.log(`Server on line on port ${PORT}`)