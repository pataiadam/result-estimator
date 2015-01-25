module.exports = {
    get: function (req, res) {
        Todos.find().exec(function(err, todos){
            if(!!err){
               res.json({data: err}); 
            }
            res.json({data: todos});
        });
    },

    add: function(req, res) {
        Todos.create(req.body).exec(function(err, todos){
            if(!!err){
               res.json({data: err}); 
            }
            res.json({data: todos});
        });
    },

    delete: function (req, res) {
        Todos.destroy(req.body).exec(function(err){
            if(!!err){
               res.json({data: err}); 
            }
            res.json({data: "delete successed"});
        });
    },

    update: function (req, res) {
        Todos.update({todos_id: req.body.todos_id}, req.body).exec(function(err, todos){
            if(!!err){
               res.json({data: err}); 
            }
            res.json({data: todos});
        });
    }
}