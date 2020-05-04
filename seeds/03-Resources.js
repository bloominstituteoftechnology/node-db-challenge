
exports.seed = function(knex) {
  
  return knex('resources').truncate()
    .then(function () {
        
      return knex('resources').insert([
        {name: 'Soda', description: 'Always stock up in Mountain Dew', task_id: '1', project_id: '1'},
        {name: 'Food', description: '', task_id: '2', project_id: '2'},
        {name: 'Keyboards', description: 'You will break some', task_id: '3', project_id: '2'},
        {name: 'Peers', description: 'They will be useful', task_id: '4', project_id: '3'},
        {name: 'Instructors', description: '', task_id: '5', project_id: '3'},
        {name: 'Youtube', description: 'When you are stumped...', task_id: '6', project_id: '3'},

      ]);
    });
};