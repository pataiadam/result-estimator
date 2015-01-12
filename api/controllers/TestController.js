/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        Matches.find().exec(function(err, matches){
            if(!!err){
                sails.log.error(err);
                req.flash('error', err);
                return;
            }
            res.view({matches: matches});
        });
    },

    superSecretApiToDbCall:  function (req, res) {
        //TODO: !!! This function will be a separate app!!!
        var https = require('https');
        var APIKey = '31231c5b-09fb-9690-4d736febf422';
        var comp_id = '1204';
        var from_date = '11.01.2015';
        var to_date = '11.02.2015';
        var options = {
            hostname: 'football-api.com',
            port: 443,
            path: '/api/?Action=fixtures&APIKey='+APIKey+'&comp_id='+comp_id+'&&from_date='+from_date+'&&to_date='+to_date,
            method: 'GET'
        };
        sails.log.debug(options.path);

        https.request(options, function(response) {
            var responseData = '';
            response.setEncoding('utf8');

            response.on('data', function(chunk){
                responseData += chunk;
            });

            response.once('error', function(err){
                // Some error handling here, e.g.:
                res.serverError(err);
            });

            response.on('end', function(){
                try {
                    var data = JSON.parse(responseData);
                    findOrCreateByJson(0, data.matches, [], function(err, resut){
                        if (!!err) {
                            sails.log.error(err);
                        }
                        res.json(resut);
                    });
                } catch (err) {
                    sails.log.error(err);
                    req.flash('error', err);
                    return;
                }
            });
        }).end();

        function findOrCreateByJson(index, data, results, callback) {
            if (index === data.length) {
                callback(null, results);
            } else {
                var actMatch = data[index];
                Matches.findOne({match_id: actMatch.match_id}).exec(function (err, match) {
                    if (!!err) {
                        callback(err, null);
                    }
                    if(match === undefined){
                        var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
                        var date = new Date(actMatch.match_formatted_date.replace(pattern,'$3-$2-$1'));
                        var localScore = actMatch.match_localteam_score;
                        var visitorScore = actMatch.match_visitorteam_score;
                        var match ={
                            match_id: actMatch.match_id,
                            comp_id: actMatch.match_comp_id,
                            date: date,
                            status: actMatch.match_status,
                            localteam_id: actMatch.match_localteam_id,
                            localteam_score: localScore==='?'?-1:localScore,
                            visitorteam_id: actMatch.match_visitorteam_id,
                            visitorteam_score: visitorScore==='?'?-1:visitorScore
                        };
                        sails.log.debug(match);
                        Matches.create(match).exec(function (err, match) {
                            if (!!err) {
                                callback(err, null);
                            }
                            results.push(match);
                            findOrCreateByJson(index + 1, data, results, callback);
                        });
                    }else{
                        results.push(match);
                        findOrCreateByJson(index + 1, data, results, callback);
                    }
                });
            }
        }
    }


};

