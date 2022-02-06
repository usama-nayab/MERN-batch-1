const Chat = require("../models/Chat");
const ran = require("random-name");

//CRUD - Create, Read, Update, Delete

exports.add = (req, res) => {
  const body = req.body;
  const chat = new Chat({
    name: ran.first(),
    message: body.message,
  });
  chat.save();
  return res.status(200).json({
    success: true,
    data: chat,
    message: "chat added successfully",
  });
}

exports.get = (req, res) => {
  const query = req.query;
  Todo.findOne({ name:query.name }, (err, chat) => {
    if (err)
      return res.status(400).json({
        success: false,
        message: "error while getting chat",
      });
    if(chat){
    return res.status(200).json({
      success: true,
      data: chat,
      message: "chat fetched successfully"
    });
    }
   return res.status(404).json({
       success:false,
       message: 'chat not found'
   })
  });
}


exports.del = ((req , res) => {
    const body = req.body;
    Todo.findOneAndDelete({name:body.name} , (err , chat) => {
        if (err) return res.status(400).json({
            success: false,
            message: 'error while deleting chat'
        });
        return res.status(200).json({
            success: true,
            data: chat,
            message:'chat deleted successfully'
        })
    });
});


exports.update = ((req , res) => {
    const body = req.body;
    Todo.findOneAndUpdate({name:body.name} , {$addToSet:{message:body.message}} , (err , chat) => {
        if (err) return res.status(400).json({
            success: false,
            message: 'error while updating chat'
        });
        return res.status(200).json({
            success: true,
            data: chat,
            message:'chat updated successfully'
        })
    });
});

exports.updateList = ((req , res) => {
  const body = req.body;
  Todo.findOneAndUpdate({name:body.oldName},
    {name:body.newName} , {message:body.message},
    (err , chat) => {
      if(err){
        return res.status(404).json({
          success:false,
          messgae:"error while updating chat"
        })
      }
      if(chat){
        return res.status(200).json({
          success:true,
          data:chat,
          message:"chat updated successfully"
        })
      }
      return res.status(404).json({
        success:false,
        message:"todo not found"
      })
    });

});