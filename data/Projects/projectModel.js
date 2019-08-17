const db = require('../db-config')



module.exports = {
    add,
    find,
     
    
    

}

function find(){
    return db('schemes')
}

async function add (project){
    const [id]= await db('schemes').insert(project);
    return findById(id)
}

