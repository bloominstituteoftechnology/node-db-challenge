const knex = require ('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);
const projectsTable ='projects';
const actionsTable = 'actions';


const getAllItems =  (tableName)=>{
  return(req, res) => {
  db.select().table(`${tableName}`)
    .then(item =>{
      res.status(200).json(item)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
}}

const  getAllProjects =  getAllItems(projectsTable);
const  getAllActions =  getAllItems(actionsTable);

const getprojectsbyId =  (req, res)=>{
      const {id} = req.params;
        db.select('pr.id','pr.name','pr.description',
       'pr.completed','pr.created_at','ac.anotes'
      ,'ac.adescription',
      'ac.acompleted')
         .from('projects as pr').where('pr.id', id)
         .leftJoin('actions as ac','pr.id' ,'ac.projects_id')
         //.orderBy('pr.name', 'desc')
        .then(item =>{
          res.status(200).json(item)
        })
        .catch(err =>{
          res.status(500).json(err)
        })
    }      

    const CreateNewItem = (tableName) =>{
      // GRAB DATA FROM THE BODY
      return (req, res)=>{
        const newItem = req.body;
        // SAVE DATA TO DATABASE
        db(`${tableName}`).insert(newItem)
        // RETURN ID OF NEWLY CREATED RECORD
        .then(id =>{
          res.status(201).json({message :` inserted with ID :${id}`})
        })
        .catch(err =>{
          res.status(500).json(err)
        })
    }
       
    }
    
    const CreateNewProject = CreateNewItem(projectsTable);
    const CreateNewAction = CreateNewItem(actionsTable);

 


module.exports = {
  getprojectsbyId       : getprojectsbyId,
  getAllProjects        : getAllProjects,
  CreateNewProject      : CreateNewProject,
  CreateNewAction       : CreateNewAction,
  getAllActions         : getAllActions
}