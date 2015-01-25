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
    }
}