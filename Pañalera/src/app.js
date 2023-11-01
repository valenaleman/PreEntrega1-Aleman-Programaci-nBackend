import express from 'express';

const app = express();
const port = 8080;

app.get('/success', (req, res) => {
    res.status(200).send('Solicitud exitosa');
});

app.get('/persona', (req, res) => {
    const persona = {
        nombre: 'Valen',
        apellido: 'A.',
        edad: 20,
        correo: 'valentinaaleman07@gmail.com'
    };

    res.status(200).json(persona);
});

app.listen(port, () => {
    console.log('El servidor express está escuchando en el puerto ${port}');
});