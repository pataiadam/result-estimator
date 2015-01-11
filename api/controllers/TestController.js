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
            res.view({
                tests: tests,
                errors: req.flash('error')
            });
        });
    }
};

