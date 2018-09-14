
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 3, description:'create crud endpoints',project_id:3},
        {id: 4, description:'create crud endpoints,migrations and seeds',project_id:4}
       
      ]);
    });
};
