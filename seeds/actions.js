
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 3, action_description:'create crud endpoints',project_id:3},
        {id: 4, action_description:'create crud endpoints,migrations and seeds'}
       
      ]);
    });
};
