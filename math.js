const express = require("express");

const app = express();

app.use(express.json());

let lastuserid = 0;
let lastpetid = 0 ;

const  users = [{
    id : ++lastuserid,
    name: 'amel',
    type: 'backend dev',
    owner: 1,
}]

const pets = [{
    id: ++lastpetid,
    name: 'feddag',
    type:'caniche',
    owner:1,
}]


app.get('/', (req , res) => {
    console.log(res);
    res.status(500).send('Hello');
})
app.get('/users' , (req , res) => {
    //amel feddag
    res.json(users)
})
app.post('/users' , (req , res) => {
    //amel feddag
    console.log(req.body)
    users.push({
        id : ++lastuserid,
        ...req.body
    });
    res.status(201).send('user created')
})

app.get('/pets' , (req , res) => {
    //amel feddag
    res.json(pets)
})
app.post('/pets' , (req , res) => {
    //amel feddag
    console.log(req.body)
    pets.push({
        id : ++lastpetid,
        ...req.body
    });
    res.status(201).send('pet created')
})
app.listen(3000, () => {
    console.log('server start')
})