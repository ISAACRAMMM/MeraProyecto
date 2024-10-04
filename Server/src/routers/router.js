import { Router } from "express";
import bcrypt from "bcryptjs";  //libreria para cifrar contraseñas
import multer from "multer";    //libreria para manejar imagenes o archivos
import * as fs from "fs";
import path from "path";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import cors from 'cors'; 

import * as queryGet from './querys/querysGet.js'




const __dirname = dirname(fileURLToPath(import.meta.url));



const router = Router();



router.use(cors({
    origin: 'http://localhost:3000' // Permite solicitudes desde estos orígenes
  }));


  

router.get('/', (req, res) => {
    const data = { message: 'Hola desde el servidor!' };
res.json(data)
})

// 
router.get('/productos', async (req, res) => {
    try {
       const productos  = await queryGet.getProdutos()
        res.json(productos)

    } catch (error) {
        console.error(error)
    }
})

//
router.get('/nosotros', (req, res) =>{
    try {
        const nosotros= queryGet.getNosotros()

        res.json(nosotros)

    } catch (error) {
        console.error(error)
    }
})

//
router.get('/resultados_encuestas', (req, res)=>{

})

router.post('/nueva_encuesta', (req, res)=>{

})

//
router.get('/servicios', (req, res)=>{

})

router.post('/nuevo_servicio',(req, res)=>{

})






export default router;