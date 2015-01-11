/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index:  function (req, res) {
        Matches.find().exec(function (err, matches) {
            if (!!err) {
                sails.log.error(err);
                req.flash('error', err);
                return;
            }
            res.view({
                matches: matches,
                errors: req.flash('error')
            });
        });
    }
};

