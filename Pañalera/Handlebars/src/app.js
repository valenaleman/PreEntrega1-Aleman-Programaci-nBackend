import express, { Router } from 'express';
import handlesbar from 'express-handlebars';
import __dirname from './utils.js';
import userRouter from './routes/view.router.js';
import viewRouter from './routes/user.router.js';


const app = express();
const port = 8080;

app.get('/persona', (req, res) => {
    const persona = {
        nombre: 'Valen',
        apellido: 'A.',
        edad: 20,
        correo: 'valentinaaleman07@gmail.com'
    };

    res.status(200).json(persona);
});

app.engine('handlebars', handlesbar.engine());

app.set('views',`${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
    let testUser ={
        name:"Valen",
        last_name: "Aleman"
    }

    res.render('index',testUser);
});

app.listen(port, () => {
    console.log(`El servidor express está escuchando en el puerto ${port}`);
});

app.use('/api/users', router);
app.use('/api/view', router);