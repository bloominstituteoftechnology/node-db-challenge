const db = require('../db-config')



module.exports = {
    add,
    find,
     
    
    

}

function find(){
    return db('projects')
}

async function add (project){
    const [id]= await db('projects').insert(project);
    return findById(id)
}

