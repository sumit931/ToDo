const express = require('express');
const {Todo} = require("./db");
const {createTodo} = require("./types");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const freshtodo = new Todo({
        title : req.body.title,
        description : req.body.description,
        completed : false
    });
    console.log(freshtodo);
    freshtodo.save()
    .then(()=>console.log("todo addes successfully"))
    .catch(err=>console.error('Error detected',err));
    res.json({ message: "database submitted" });

    
})
app.get("/todo",(req,res)=>{
    Todo.find({})
    .then((v1)=>{
        res.send(v1);
    })
    .catch((error)=>{
        console.log("error fetching todos "+error);
        res.status(500);
    })
})
app.delete("/todo/:id",async(req,res) =>{
    console.log("hello how you doing");
    const id = req.params.id;
    try{
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if(!deletedTodo){
            return res.status(404).send("todo not found");
        }
        res.send("Todo Deleted successfully");
    }
    catch(error){
        console.log("Error deleting todo = "+error);
        res.status(500).send("Internal server error");  
    }
});
app.put("/todo/:id",async (req,res)=>{
    const idd = req.params.id;
    const doc = await Todo.findById(idd);
    doc.completed = true;
    await doc.save();
    res.send('updated');
})
app.listen(3000,()=>{
    console.log('I am doing great');
})