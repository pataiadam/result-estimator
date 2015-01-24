/**
 * Created by Adam on 2015.01.22..
 */
module.exports = {
    dummy: function (req, res) {
        res.json({data: 'OK'});
    },

    add: function(req, res) {
        sails.log.debug("WTF"+req.param); //dont belive to editor fffuuuuck
    	res.json({data: 'POK'});
    }
}