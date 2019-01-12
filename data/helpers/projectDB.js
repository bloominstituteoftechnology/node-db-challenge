/**Contains and provides access to the helper functions that query the database via knex */

//Access knex/database connection
const db = require('../dbConfig');


//Create/export helper functions
module.exports = {
    //get all projects
    getProjects: function(){
        return db('projects')
        
    }
}
