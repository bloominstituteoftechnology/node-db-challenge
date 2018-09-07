//Helper Function for accessing actions by project id

module.exports = {
getProjectActions: function(projectId) {
    return db('actions as a')
    .join('projects as p', 'p.id', 'a.projectId')
    .select('a.id', 'a.text', 'p.name as projectName')
    .where('a.projectId', projectId);
    } 
};