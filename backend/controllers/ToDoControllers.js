const ToDoModels = require("../models/ToDoModels")


module.exports.getTodo = async(req , res )=>{
    const toDo = await ToDoModels.find()
    res.send(toDo)
}

module.exports.saveTodo = async (req , res)=>{
    const {text} = req.body

    ToDoModels
     .create({text})
     .then((data)=>{
        console.log("Added successfully")
        console.log(data)
        res.send(data)
     })
     .catch(err => res.status(400).send(err))
    
}

module.exports.updateTodo = async (req , res)=>{
    const {_id , text} = req.body
    ToDoModels
     .findByIdAndUpdate(_id , {text})
     .then(()=>{res.send("Updated successfully")})
     .catch((err)=> console.log(err))
}

module.exports.deleteTodo = async (req , res)=>{
    const {_id} = req.body
    ToDoModels
     .findByIdAndDelete(_id)
     .then(()=>{res.send("Deleted successfully")})
     .catch((err)=> console.log(err))
}