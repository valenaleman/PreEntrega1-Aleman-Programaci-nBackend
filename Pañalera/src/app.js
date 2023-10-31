import express, { Express } from "express";
const app = Express();
const port = 3000;

app.use(express.urlencoded({extends:true }));


let users = [
    { id: 1, name: 'Babysec - Ultrasec', price: 3200, content: 60 },
    { id: 2, name: 'Pampers - Premium care, piel delicada', price: 5900, content: 58},
    { id: 3, name: 'Pampers - Premium care, recién nacido hipoalergénico', price: 2420, content: 36},
]

app.get('')