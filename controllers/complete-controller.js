import Todo from '../models/todosmodel.js'

var list = async (req, res) => {
    try{
        const todo = await Todo.find({}).sort({isCompleted: 'asc',updatedAt:'desc'});
        //UserModel.find({}).sort({firstName: 'asc', updatedAt:'asc' })
        res.json(todo);
    } catch(err){
        res.status(400).send({message: err.message})
    }
}

var add = async (req,res) => {
    console.log("add",{
        name: req.body.name,
        isCompleted:req.body.isCompleted
    })
    const todo = new Todo({
        name: req.body.name,
        isCompleted:req.body.isCompleted
    })
    try {
        const a1 = await todo.save()
        res.json(a1)
    } catch(err) {
        res.status(400).send({message: err.message})
    }
}

var deleteone = async (req,res) => {
    try{
        res.json(await Todo.deleteOne({_id: req.params.id }));
    }
    catch(err){
        res.status(400).send({message: err.message})
    }
}

var update = async (req,res) => {
    try{
        const r1=await Todo.updateOne({ _id: req.params.id}, {
            name: req.body.name,
            isCompleted : req.body.isCompleted
        });
        res.json(r1);
    }
    catch(err){
        res.status(400).send({message: err.message})
    }
}

export default{add, deleteone,update,list}