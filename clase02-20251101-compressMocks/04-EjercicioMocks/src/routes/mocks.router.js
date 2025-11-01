import { Router } from 'express';
import { generateMockPet } from '../mocks/mocks.js';
import petModel from '../models/petModel.js';
export const router=Router()

router.get('/mockingpets', async(req,res)=>{

    let {cantidad=1, grabar=0}=req.query

    let mascotas=[]

    for(let i=0; i<cantidad; i++){
        mascotas.push(generateMockPet())
    }

    if(grabar){
        mascotas=await petModel.insertMany(mascotas)
    }

    res.setHeader('Content-Type','application/json')
    res.status(200).json({mascotas})
})