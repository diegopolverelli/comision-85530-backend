const express = require('express');
const jsdoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

const app = express();

const options={
    definition: {
        openapi: "3.0.0", 
        info: {
            title: "abm users", 
            version: "1.0.0", 
            description: "prueba documentación abm users"
        },
        servers: [
        {
            url: 'http://localhost:3000',
            description: "Test"
        },
        {
            url: 'http://localhost:8080',
            description: "Production"
        },
        {
            url: 'http://localhost:3001',
            description: "Dev"
        },
        ],        
    },
    apis: ["./src/docs/*.yaml"]
}

const spec=jsdoc(options)
console.log(JSON.stringify(spec, null, 5))

app.use("/docs", swaggerUI.serve, swaggerUI.setup(spec))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const usuarios = [
    {
        id: '60acc54545c8e82e0475f73a',
        first_name: 'Juan',
        last_name: 'Gomez',
        email: 'jgomez@test.com',
        password: 'xjkkakjsik'
    },
    {
        id: '60acc54545c8e82e0475100a',
        first_name: 'Marina',
        last_name: 'Estevez',
        email: 'mestevez@test.com',
        password: 'xjkkakjsiz'
    },
    {
        id: '60acc54545c8e82e0475200b',
        first_name: 'Diego',
        last_name: 'Gonzalez',
        email: 'dgonzalez@test.com',
        password: 'xjkkakaaaa'
    },
]

app.get('/api/users', (req, res) => {
    console.log('Ejecutando ruta /api/users')

    res.status(200).json({ message: 'Lista de usuarios', usuarios: usuarios });
});

app.get('/api/users/:uid', (req, res) => {
    let usuario = usuarios.find(u => u.id == req.params.uid)
    res.status(200).json({ message: 'Lista de usuarios, ingresando param: ' + req.params.uid, usuario });
});

app.post('/api/users', (req, res) => {
    let { first_name, last_name, email, password } = req.body
    if (!first_name || !last_name || !email || !password) return res.status(400).send('Faltan datos')
    let existe = usuarios.find(u => u.email == email)
    if (existe) return res.status(400).send('usuario existente')

    let id = '60ab';
    for (let i = 0; i < 20; i++) {
        const digit = Math.floor(Math.random() * 10); // Genera un dígito aleatorio del 0 al 9
        id += digit.toString(); // Concatena el dígito al número aleatorio
    }

    usuarios.push({
        id, first_name, last_name, email, password
    })

    res.status(201).json({ message: 'Usuario creado', usuario:{id, first_name, last_name, email, password} });
});

// Puerto de escucha
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
