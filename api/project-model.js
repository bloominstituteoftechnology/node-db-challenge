const db= require('../data/db-config');

function getProject(){
    return db("project")
}
function insert(project) {
    return db('project')
        .insert(project, 'id')
        .then(([id]) => getById(id))
}

module.exports ={
    getProject,
    insert
    
   
}