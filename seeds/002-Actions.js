
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
 {description:'this is the description field for action one', notes: 'notes for action one', project_id:'1'},
        {description:'this is the description field for action two', notes: 'notes for action two', project_id:'2'},
        {description:'this is the description field for action three', notes: 'notes for action three', project_id:'3'},
        {description:'this is the description field for action four', notes: 'notes for action four(attached to project id 1)', project_id:'1'}
      ]);
    });
};


// -An `action`
// belongs to only one project.An action has:
//   -a unique id. -
//   a description of what needs to be done. -
//   a notes column to add additional information. -
//   a flag that indicates
// if the action has been completed.