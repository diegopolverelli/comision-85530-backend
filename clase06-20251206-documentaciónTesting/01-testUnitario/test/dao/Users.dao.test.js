import {describe, it} from "mocha"
import mongoose, { isValidObjectId } from "mongoose";
import Assert from "assert"
import {expect} from "chai"
import Users from "../../src/dao/Users.dao.js";

const assert=Assert.strict

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log(`Error DB`)
    process.exit()
}

const usersDAO=new Users()


describe("Pruebas DAO Users", function(){
    this.timeout(10000)

    // before / after / beforeEach / afterEach
    after(()=>{
        // eliminar users creados con save
    })

    it("El metodo get retorna un array", async()=>{
        let respuestaGet=await usersDAO.get()

        assert.equal(Array.isArray(respuestaGet), true)
        // assert.equal(1, 2)
        expect(Array.isArray(respuestaGet)).to.be.true
        expect(Array.isArray(respuestaGet)).to.be.equal(true)

    })

    it("El metodo get retorna un array de usuarios, cada usuario tiene la propiedad first_name", async()=>{
        let respuestaGet=await usersDAO.get()

        assert.equal(Array.isArray(respuestaGet), true)
        // assert.equal(1, 2)
        expect(Array.isArray(respuestaGet)).to.be.true
        expect(Array.isArray(respuestaGet)).to.be.equal(true)
        if(respuestaGet.length>0){
            expect(respuestaGet[0].first_name).to.exist
            expect(respuestaGet[0]).to.has.property("first_name")
        }
    })

    it("El metodo get retorna un array de usuarios, cada usuario tiene la propiedad last_name", async()=>{
        let respuestaGet=await usersDAO.get()

        assert.equal(Array.isArray(respuestaGet), true)
        // assert.equal(1, 2)
        expect(Array.isArray(respuestaGet)).to.be.true
        expect(Array.isArray(respuestaGet)).to.be.equal(true)
        if(respuestaGet.length>0){
            expect(respuestaGet[0].last_name).to.exist
            expect(respuestaGet[0]).to.has.property("last_name")
        }
    })

    it("El metodo get retorna un array de usuarios, usuarios existentes en DB", async()=>{
        let respuestaGet=await usersDAO.get()

        assert.equal(Array.isArray(respuestaGet), true)
        // assert.equal(1, 2)
        expect(Array.isArray(respuestaGet)).to.be.true
        expect(Array.isArray(respuestaGet)).to.be.equal(true)
        if(respuestaGet.length>0){
            expect(respuestaGet[0]._id).to.exist
            expect(respuestaGet[0]).to.has.property("_id")
            expect(isValidObjectId(respuestaGet[0]._id)).to.be.true
            let userDB=await mongoose.connection.collection("users").findOne({_id: respuestaGet[0]._id})
            expect(userDB).to.be.ok
        }
    })



})