const DB = require('./dbQ');
const a = DB.makeGetUsers;
const pool = require('./connection')
const getUsers=a({pool});
//const getUsers = (DB.makeGetUsers)();
const b =DB.makeUsers
const postUser = b({pool})

const c = DB.updateUsers
updateUsers = c({pool})
//const updateUsers =(DB.updateUsers)();
const deleteUsers =(DB.deleteUsers)({pool});
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
//const jigar = require('./connection');
app.use(bodyParser.json());
//const bodyParser = require('body-parser') 


app.get('/jigar',async(req,res)=>{
    try {
        const result = await getUsers({
            id: 1001,
        });
        console.log(result);
        res.send(result)
      

    } catch (err) {
        console.log(`SomeThing went Wrong in connection ${err}`)
    }
    
   
})
app.post('/jigar',async(req,res)=>{
    const user = req.body;  
    console.log(req);
    try {
        const result = await postUser({
            id: user.personid,
            lastname:`${user.lastname}`,
            firstname:`${user.firstname}`,
            address:`${user.address}`,
            city:`${user.city}`
        });
        res.send(result);
       
    } catch (err) {
        console.log(`SomeThing went Wrong in connection ${err}`)
    }
 
    
    
})

app.put('/jigar',async(req,res)=>{
    const user = req.body;
    try {
        const result = await updateUsers({
            id: user.personid,
            lastname:`${user.lastname}`,
            firstname:`${user.firstname}`,
            address:`${user.address}`,
            city:`${user.city}`
        });
        res.send(result);
      

    } catch (err) {
        console.log(`SomeThing went Wrong in post connection ${err}`)
    }
   
})


app.delete('/jigar',async(req,res)=>{
    const user = req.body;
    try {
        const result = await deleteUsers({
            id: user.personid,
        });
        res.send(result);
        

    } catch (err) {
        console.log(`SomeThing went Wrong in post connection ${err}`)
    }

})


app.listen(3300,()=>{
    console.log(('Server is started at port 3300'));
})
