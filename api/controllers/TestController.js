/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index:  function (req, res) {
        Test.find().exec(function (err, tests) {
            if (!!err) {
                sails.log.error(err);
                req.flash('error', err);
                return;
            }
            Test.create({text: "LOL "+ new Date()}).exec(function (err, test){
                res.json({test: tests});
            });
        });
    }
};

