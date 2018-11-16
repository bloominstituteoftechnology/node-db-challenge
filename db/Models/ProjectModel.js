const db = require('../../knexConfig');

module.exports = {
  getProjects,
  getProjectById,
  addProjects,
  updateProjects,
  deleteProjects
};

function getProjects() {
  return db('project');
}

function getProjectById(id) {
  return db('project')
    .join('actions', 'project.id', '=', 'actions.project_id')
    .where('project.id', id)
    .reduce(
      (item, row, index) => {
        if (index === 0) {
          item.id = row.id;
        }
        item.project_name = row.p_name;
        item.project_description = row.p_description;
        item.actions.push({
          id: row.id,
          action_descriptions: row.a_description,
          action_note: row.a_notes
        });
        return item;
      },
      { id: null, project_name: '', project_description: '', actions: [] }
    );
}

function addProjects(action) {
  return db('project').insert(action);
}

function updateProjects(action, id) {
  console.log(action);
  console.log('reached me');
  return db('project')
    .where({ id: id })
    .update(action);
}

function deleteProjects(id) {
  return db('project')
    .where({ id: id })
    .del();
}
