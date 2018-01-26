const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      const arr = [];
      for(let i = 0; i < 15; i++) {
        arr.push({name: faker.name.findName(), description: faker.random.words(), notes: faker.lorem.sentence(), completed: Math.random() >= 0.5})
      }
      return knex('projects').insert(arr);
    });
};
