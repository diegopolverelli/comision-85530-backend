import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{


    res.status(200).render('home')
})

router.get('/heroes',(req,res)=>{

    let heroes
    try {
        req.logger.verbose("consultando heroes")
        heroes=heroesManager.getHeroes()
    } catch (error) {
        // console.log(error.message)
        req.logger.error("error en /heroes")
    }

    res.status(200).render('heroes', {
        heroes
    })
})