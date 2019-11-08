
const db = require('../data/db-config');

module.exports = {
find,
findById,
getTasks,
add,
remove,
update,
addTask,
findRes,
findResById,
addRes,
getTaskById
}; 

function find() {
    return db.select('*').from('project');
};

function findRes() {
    return db.select('*').from('resource');
};

function findById(id) {
    return db('project').where({id}).first();
    
};



function findResById(id) {
    return db('resource').where({id}).first();
    
};


function getTaskById (id) {
    return db('tasks')
    .select('*')
    .where({id})
    .first();
};


function getTasks(id) {
    return db
   

    .select( 'tasks.*')
    .from('tasks')
    .join('project', 'tasks.project_id', '=', 'project.id')
    .where('tasks.project_id', id)
        

        

       
    
    
};


 function add(scheme) {
   return db('project', 'id').insert(scheme)
    
 
     
};



function addRes(res) {
    return db('resource').insert(res)
      
 };


function addTask(task) {
    return db('tasks')
    .insert(task, '*')
    .then(id =>{
        return getTaskById(...id)
        .then(task =>{
            task.completed = task.completed > 0;
            return task;
        });
    })
      
 };

function remove(id) {
    return db('project').where({id}).del();
};

function update(changes, id) {
    return db('project')
    .where('id', id)
    .update(changes, '*');
};