import { Router } from "express";
import bcrypt from "bcryptjs";  //libreria para cifrar contraseñas
import multer from "multer";    //libreria para manejar imagenes o archivos
import * as fs from "fs";
import path from "path";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import cors from 'cors'; 

import * as queryGet from './querys/querysGet.js'
import * as queryPost from './querys/querysPost.js'




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
router.get('/get/productos', async (req, res) => {
    try {
       const productos  = await queryGet.getProdutos()
        res.json(productos)

    } catch (error) {
        console.error(error)
    }
})

router.get(`/get/producto/:id`, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const productos  = await queryGet.getProduto(id)
        res.json(productos)

    } catch (error) {
        console.error(error)
    }
})

router.post('/new/producto', async (req, res) => {
    const { nombre, descripcion, subcategoria } = req.body;

    
    if (!nombre || !descripcion || !subcategoria) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

  
    console.log('Producto recibido:', { nombre, descripcion, subcategoria });

    const producto= await queryPost.newProducto(nombre, descripcion, subcategoria)
    
    if(producto){
        res.status(201).json({
            message: 'Producto creado con éxito',
            producto: { nombre, descripcion, subcategoria }
        });
    }
   
})


//
router.get('/get/subcategorias', async (req, res) => {
    try {
       const productos  = await queryGet.getSubcategorias()
        res.json(productos)

    } catch (error) {
        console.error(error)
    }
})

//
router.get('/nosotros', async (req, res) =>{
    try {
        const nosotros= await queryGet.getNosotros()

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