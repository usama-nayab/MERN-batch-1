const Todo = require("../models/Todo");

// now we are making controllers to play with our todo list

exports.add = (req, res) => {
  const body = req.body;
  const todo = new Todo({
    title: body.title,
    list: body.list,
  });
  todo.save();
  return res.status(200).json({
    success: true,
    data: todo,
    message: "todo added successfully",
  });
}

exports.get = (req, res) => {
  const query = req.query;
  Todo.findOne({ title:query.title }, (err, todo) => {
    if (err)
      return res.status(400).json({
        success: false,
        message: "error while getting todo",
      });
    if(todo){
    return res.status(200).json({
      success: true,
      data: todo,
      message: "todo fetched successfully"
    });
    }
   return res.status(404).json({
       success:false,
       message: 'todo not found'
   })
  });
}


exports.del = ((req , res) => {
    const body = req.body;
    Todo.findOneAndDelete({title:body.title} , (err , todo) => {
        if (err) return res.status(400).json({
            success: false,
            message: 'error while deleting todo'
        });
        return res.status(200).json({
            success: true,
            data: todo,
            message:'todo deleted successfully'
        })
    });
});


exports.update = ((req , res) => {
    const body = req.body;
    Todo.findOneAndUpdate({title:body.title} , {$addToSet:{list:body.list}} , (err , todo) => {
        if (err) return res.status(400).json({
            success: false,
            message: 'error while updating todo'
        });
        return res.status(200).json({
            success: true,
            data: todo,
            message:'todo updated successfully'
        })
    });
});

exports.updateList = ((req , res) => {
  const body = req.body;
  Todo.findOneAndUpdate({title:body.oldTitle},
    {title:body.newTitle} , {list:body.list},
    (err , todo) => {
      if(err){
        return res.status(404).json({
          success:false,
          messgae:"error while updating data"
        })
      }
      if(todo){
        return res.status(200).json({
          success:true,
          data:todo,
          message:"todo updated successfully"
        })
      }
      return res.status(200).json({
        success:false,
        message:"todo not found"
      })
    });

});