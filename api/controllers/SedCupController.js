/**
 * Created by Adam on 2015.01.22..
 */
module.exports = {
    dummy: function (req, res) {
        res.json({data: 'OK'});
    },

    add: function(req, res) {
        sails.log.debug("params"+req.params);
        sails.log.debug("body"+req.body);
        sails.log.debug("query"+req.query); //dont belive to editor fffuuuuck
    	res.json({params: req.params,
        body: req.body,
        query: req.query});
    }
}