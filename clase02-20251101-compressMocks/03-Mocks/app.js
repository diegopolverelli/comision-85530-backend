import {fakerES_MX as fa} from "@faker-js/faker"

// console.log("nombre",fa.person.firstName("female"))
// console.log("apellido:",fa.person.lastName())

// console.log("email", fa.internet.email())

// console.log("animal - perro:", fa.animal.dog())
// console.log("animal - gato:", fa.animal.cat())

for(let i=0; i<10; i++){
    let nombre=fa.person.firstName("female")
    console.log("nombre", nombre)
    let apellido=fa.person.lastName()
    console.log("apellido:", apellido)
    
    console.log("email", fa.internet.email(
        {
            firstName: nombre, 
            lastName: apellido, 
            provider: `coderhouse.com`
        }
    ))


    console.log("producto", fa.commerce.product())
    console.log("animal - perro:", fa.animal.dog())
    console.log("animal - gato:", fa.animal.cat())

    console.log(`***********\n`)
}


const generateMockPet=()=>{
    // {name,specie,birthDate}
    let name=fa.animal.petName()
    let specie=fa.animal.type()
    let birthDate=fa.date.past({ years: 10 })

    return {
        name, 
        specie, 
        birthDate
    }
}

console.log(generateMockPet())

