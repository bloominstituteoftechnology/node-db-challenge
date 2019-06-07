const knex = require('knex')

//configure knex

const knexConfig = require('../knexfile') //has both tables
  
const db = knex(knexConfig.development);

module.exports ={
addProjects,
addActions, 
addBridge,
putTogether
// getProjectWithActions
}
    
    
    
    function addProjects(project) {
        return db('projects')
            .insert(project,'id') 
    }
    function addActions(action) {
        return db('actions')
            .insert(action,'id') 
    }

    function addBridge(bridge){
        return db('project_actions')
            .insert(bridge, 'id')
        
    }




    
//****** getting actions with project */

async function FindAllActionsByProjectID(id){
    return await  db("actions")
    .where("actions_id", id)
    
}

async function FindProjects(id){
    return await db("projects")
    .where("id", id)
  
}

async function putTogether(id){
 
const act =  FindAllActionsByProjectID(id)
     
const proj = FindProjects(id)


 return await {proj,act}

}





  
    
