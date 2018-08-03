const db = require('../dbConfig');

module.exports={
    get: id=>{
        let query = db('project');
        if(id){
            query.where('id', Number(id)).first();
        }
        return query; 
    },
    inser: project=>{
        return db('project')
            .insert(project)
            .then(ids => ({id:ids[0], ...project}))
    },
    update: (id, project) =>{
        return db('project')
            .where('id', id)
            .update(project)
    },
    remove: id=>{
        return db('project')
            .where('id', id)
            .del();
    },
    getProjectActions: id=>{
        return db('action as a')
            .join('project as p',  'p.id', '=' ,'a.project_id')
            .select('p.id as projectID','p.name as projectName', 'p.description as projectDescription', 'p.isCompleted as projectCompleted', 'a.id as actionID', 'a.name as actionName', 'a.description as actionDescription', 'a.note as actionNote', 'a.isCompleted as actionCompleted', 'a.project_id')
            .where('p.id', Number(id))
    }
}