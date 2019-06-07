const knex = require('knex')

//configure knex

const knexConfig = require('../knexfile') //has both tables
  
const db = knex(knexConfig.development);

module.exports ={
addProjects,
addActions, 
putTogether,
getAllProjects,
updateProject,
deleteProject

// getProjectWithActions
}
    

function getAllProjects(){
    return db('projects')
  }

  function updateProject(id,newProject){
    return db('projects')
      .where({id:id}).update(newProject);
  }

  function deleteProject(id) {
    return db('projects')
      .where({ id:id }).del();
  }


    
    function addProjects(project) {
        return db('projects').insert(project,'id') 
    }
    function addActions(action) {
        return db('actions').insert(action,'id') 
    }
 

    async function getActionsByProjId(id){
        return await  db("actions")
        .select('id','name','description','completed',)
        .where({"actions_id": id})
        
    }
//****** getting actions with project */
async function putTogether(id){
 
const FindProjects =  await db('projects')
       
        .select('id', 'name', 'description')
        .where({"id": id})

   
    //try with all async combinations on all functions
    ProjectsActions = await getActionsByProjId(id)


//return both fields as an object
return await {FindProjects,ProjectsActions}
}





  
    
