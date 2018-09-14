
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 3, name: 'Node Express Lab', description:'CRUD Endpoints'},
        {id: 4, name: 'RDBMS',description:'CRUD endpoints , migrations and seeds'}
       
      ]);
    });
};
