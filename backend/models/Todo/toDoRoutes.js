const express = require('express');
const router = express.Router();

const ToDo = require('./ToDo');

const createToDo = (req, res) => {
    // validate fields are not empty 
    // if Valid,  create new user

    newTodo = new ToDo({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        dateCreated: req.body.dateCreated,
        priority: req.body.priority,
        aligns: req.body.aligns,
        tags:  req.body.tags
    })

    newTodo
    .save()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json(err));
}

const getAllToDos = (req,res) => {

    ToDo.find()
    .then(todos => {
        res.send(todos);
    })
    .catch(err =>{
        res.json(err);
    })

}

const getTodo = (req,res) => {
    const id = req.params.id;

    ToDo.findById(id)
        .then(todo =>{
            res.send({todo});
        })
        .catch(err =>{
            res.json(err);
        })
}

const updateTodo = (req, res) =>{
    id = req.params.id;
    ToDo.findOneAndUpdate({_id: id}, req.body, {useFindAndModify: false})
    .then(todo =>{
        res.send(todo);
    })
}

const deleteTodo = (req, res) =>{
    const id = req.params.id;
    ToDo.findOneAndDelete({_id: id})
    .then(todo => res.json({success: true, status:"todo removed"}))
    .catch(err =>{
        res.json(err);
    })
}



router.post('/', createToDo);
router.get('/', getAllToDos);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
module.exports = router;