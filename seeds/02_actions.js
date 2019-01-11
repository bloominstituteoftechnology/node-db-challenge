
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, action_description: 'Climb that ladder', notes: 'Be careful', completed: true, project_id: 1},
        {id: 2, action_description: 'Grab those leaves', notes: 'Dont be shy', completed: true, project_id: 1},
        {id: 3, action_description: 'Spray Gutters', notes: 'Gettem nice and clean', completed: false, project_id: 1},
        {id: 4, action_description: 'Climb down that ladder', notes: 'Go watch some T.V. champ', completed: false, project_id: 1},
        {id: 5, action_description: 'Go to car wash', notes: 'Bring change', completed: true, project_id: 2},
        {id: 6, action_description: 'Ride on through', notes: 'Dont be scared', completed: false, project_id: 2},
        {id: 7, action_description: 'Go home', notes: 'You rock!', completed: false, project_id: 2},
      ]);
    });
};
