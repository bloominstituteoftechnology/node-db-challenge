
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1, 
          description: 'Sprint stuff',
          notes: 'Do the things'
        },
        {
          project_id: 2, 
          description: 'More sprint stuff',
          notes: 'Do more things'
        },
      ]);
    });
};
