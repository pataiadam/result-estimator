
module.exports = {
    identity: 'Todos',
    attributes: {
        'todos_id': {
            type: 'integer',
            primaryKey: true
        },
        'title': {
            type: 'string'
        },
        'date': {
            type: 'date'
        },
        'content': {
            type: 'string',
        }
    }
};

