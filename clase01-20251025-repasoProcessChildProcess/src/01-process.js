import fs from "fs"

console.log("pid", process.pid)
console.log("s.o.", process.platform)
console.log("cpuUsage", process.cpuUsage())
console.log("memoryUsage", process.memoryUsage())
console.log("directorio actual", process.cwd())

// console.log(process.env)
console.log("password")
console.log(process.env.PRUEBA_SECRET)

console.log(process.argv)