
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Node Js', description: 'study Node Js book', completed: false},
        { name: 'Javascript', description: 'study Javascript book', completed: false},
        { name: 'Express', description: 'study Express book', completed: false},
        { name: 'Knex', description: 'watch Knex video on youtube', completed: false},
        { name: 'NPM', description: 'watch NPM video on youtube', completed: false},
        { name: 'NOdemon', description: 'watch NODEMON video on youtube', completed: false}
      ]);
    });
};
