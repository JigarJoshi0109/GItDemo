//const jigar = require('./connection')
const express = require('express')
const app = express();

const bodyParser = require('body-parser')


jigar.connect();


app.use(bodyParser.json());

app.get('/jigar',async(req,res)=>{
    try {
        let f1= await jigar.query('SELECT * from jigar;');
        res.send(f1.rows);
        
    } catch (err) {
        console.log(`SomeThing went Wrong in connection ${res.err}`)
    }
    jigar.end();
})

//creating user defined id by requesting into the query paramater

app.get('/jigar/:personid',async(req,res)=>{
    try {
        let f1= await jigar.query(`SELECT * from jigar where personid=${req.params.personid};`);
        res.send(f1.rows);
        
    } catch (err) {
        console.log(`SomeThing went Wrong in connection ${res.err}`)
    }
    jigar.end();
})


app.post('/jigar',async(req,res)=>{
    const user = req.body;
    try {
        let f1 = await jigar.query(`insert into jigar(personid, lastname,firstname,address,city) values 
    (${user.personid},'${user.lastname}','shikha','fb-road','kolkata');`)
    console.log("Insertion of the Data is sucessfully acompilshed");
    
    } catch (err) {
        console.log(`SomeThing went Wrong in post connection ${err}`)
        
    }
    jigar.end();
    
})

app.put('/jigar/:personid',async(req,res)=>{
    const user = req.body;
    try {

        let g = await jigar.query(`update jigar set lastname='mehra',firstname='priyanka',city='nagpur' where personid=${req.params.personid};`)
        console.log("updated sucessufully");
    } catch (err) {
        console.log(`SomeThing went Wrong in post connection ${res.err}`)
    }
    jigar.end();
})
app.listen(3300,()=>{
    console.log(('Server is started at port 3300'));
})

