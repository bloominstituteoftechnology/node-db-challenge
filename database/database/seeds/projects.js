
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'ngasd', description:'fasdfafs',isDone:false},
        {id: 2, name: 'namfasdge', description:'adsfasdf',isDone:false},
        {id: 3, name: 'naasdgwme', description:'asdfasdf',isDone:false}
      ]);
    });
};
