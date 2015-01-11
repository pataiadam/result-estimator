/**
 * Matches.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    identity: 'Matches',
    attributes: {
        'match_id': {
            type: 'integer',
            primaryKey: true
        },
        'comp_id': {
            type: 'integer',
            primaryKey: true
        },
        'date': {
            type: 'date',
            primaryKey: true
        },
        'status': {
            type: 'string',
            primaryKey: true
        },
        'localteam_id': {
            type: 'integer',
            primaryKey: true
        },
        'localteam_score': {
            type: 'integer',
            primaryKey: true
        },
        'visitorteam_id': {
            type: 'integer',
            primaryKey: true
        },
        'visitorteam_score': {
            type: 'integer',
            primaryKey: true
        }
    }
};

