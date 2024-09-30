import { Router } from "express";
import multer from "multer";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import firebaseConfig from "../firebase.js"; 

const firebaseApp = firebaseConfig
const storage = getStorage(firebaseApp);

const routerUpload = Router();


const upload = multer({ storage: multer.memoryStorage() });

routerUpload.get('/saludo', (req, res) => {
    const data = { message: 'Hola desde el servidor!' };
res.json(data)
})

// Ruta para subir imágenes
routerUpload.post('uploadImg', upload.single('file'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    const file = req.file;
    const storageRef = ref(storage, Date.now() + '_' + file.originalname); 
  
    try {
      
      await uploadBytes(storageRef, file.buffer, {
        contentType: file.mimetype,
      });
  
      // Obtén la URL pública
      const publicUrl = await getDownloadURL(storageRef);
  
      res.status(200).send({ message: 'File uploaded successfully', url: publicUrl });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

export default routerUpload;
