import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import process from 'process';
import router from './routers/router.js'; 

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT= process.env.PORT || 3300


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.use(router);



app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'uploads')));



try {
    app.listen(PORT)
    console.log(`listening on port ${PORT}`)
} catch (error) {
    
}
