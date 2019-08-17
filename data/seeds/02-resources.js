
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'name0', description: 'description0',project_id:0},
        { name: 'name1', description: 'description1', project_id:1},
        { name: 'name2', description: 'description2', project_id:2}
      ]);
    });
};
 
