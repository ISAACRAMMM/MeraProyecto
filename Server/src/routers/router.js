import { Router } from "express";
import bcrypt from "bcryptjs";  //libreria para cifrar contraseñas
import multer from "multer";    //libreria para manejar imagenes o archivos
import * as fs from "fs";
import path from "path";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import * as query from './querys.js'




const __dirname = dirname(fileURLToPath(import.meta.url));



const router = Router();



router.get('/', (req, res) => {
    const data = { message: 'Hola desde el servidor!' };
res.json(data)
})

// 
router.get('/productos', (req, res) => {
    try {
        const productos= query.getProdutos()

        res.json(productos)

    } catch (error) {
        console.error(error)
    }
})

//
router.get('/nosotros', (req, res) =>{

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