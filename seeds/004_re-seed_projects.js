
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Learn React', description: 'Learn common React patterns and basic props handling', completed: 0},
        { name: 'Learn Redux', description: 'Learn common Redux patterns', completed: 0},
        { name: 'Learn to play the bass guitar', description: 'I just wanna get funky, man', completed: 0}
      ]);
    });
};
