const faker = require('faker');
exports.seed = function (knex, Promise) {

  return Promise.all([
    // Deletes ALL existing entries
    knex('projects').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 15; i++) {
          arr.push({ name: faker.name.findName(), description: faker.random.words(), completed: Math.random() >= 0.5 })
        }
        return knex('projects').insert(arr);
      }),

      knex('actions').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 15; i++) {
          arr.push({ description: faker.lorem.sentence(), description: faker.random.words(), notes: faker.lorem.sentence(), completed: Math.random() >= 0.5 })
        }
        return knex('actions').insert(arr);
      }),

      knex('contexts').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 15; i++) {
          arr.push({ context: faker.random.arrayElement(['home', 'office', 'at computer'])});
        }
        return knex('contexts').insert(arr);
      }),

      knex('projectscontexts').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 15; i++) {
          arr.push({ projectId: faker.random.number({min:1, max:15}), contextId: faker.random.number({min:1, max:15}) });
        }
        return knex('projectscontexts').insert(arr);
      }),

      knex('actionscontexts').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 15; i++) {
          arr.push({ actionId: faker.random.number({min:1, max:15}), contextId: faker.random.number({min:1, max:15}) });
        }
        return knex('actionscontexts').insert(arr);
      }),
  ])
};
