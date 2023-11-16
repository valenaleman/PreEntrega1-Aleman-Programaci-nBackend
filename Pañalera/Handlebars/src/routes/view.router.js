import express from 'express';

const viewRouter = express.Router();

const food = [
    {name:'Babysec - Ultrasec', price:"3200"},
    {name: 'Pampers - Premium care, piel delicada', price:"5900"},
    {name:'Pampers - Premium care, recién nacido hipoalergénico', price:"2420"},
]

viewRouter.get('/', (req, res)=>{
    let testUser ={
        name:"Sandra",
        last_name: "Laino",
        role: "admin"
    }

    res.render('index',{
        user:testUser,
        isAdmin:testUser.role==="admin",
        food
    });
});

export default viewRouter;