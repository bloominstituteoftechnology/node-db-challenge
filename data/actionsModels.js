const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

 function get(id){
    if(id){
        return db('actions').where('id', id)
            .then(action => {
                return action[0]
            })
    }

     return db('actions')
        .then(actions => {
            return actions
        })
}

 function add(action){
    return db('actions').insert(action)
        .then( ([id]) => this.get(id) )
}

 module.exports = {
    get, add,
};