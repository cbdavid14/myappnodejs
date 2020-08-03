const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req,res)=> {
    const arrTask = await Task.find();

    //console.log(arrTask);

    res.render('index',{arrTask});
});

 


/* Metodos CRUD*/ 
router.post('/add', AddTask);
router.get('/delete/:id', DeleteTask);
router.get('/turn/:id', TurnTask);
router.get('/edit/:id', EditTask);
router.post('/edit/:id', async(req, res)=> {
    const {id} = req.params;
    
    console.log(req.body);

    await Task.update({_id: id}, req.body);

    res.redirect('/');
});

async function AddTask(req, res){
    //console.log(req.body);

    const task = new Task(req.body);
    await task.save();

    res.redirect('/');
}
async function DeleteTask(req, res){
    const {id} = req.params;

    await Task.remove({_id: id});

    res.redirect('/');
}

async function TurnTask(req, res){
    const {id} = req.params;

    const task = await Task.findById(id);

    task.status = !task.status;
    await task.save();
    res.redirect('/');
}

async function EditTask(req, res){
    const {id} = req.params;

    const task = await Task.findById(id);
 
    res.render('edit',{task});
}

/* */

module.exports = router;