import express from 'express';

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log('El servidor express está escuchando en el puerto ${port}');
});

app.get('/success', (req, res) => {
    res.status(400).send('Solicitud exitosa');
});
