const faker = require('faker');
exports.seed = function (knex, Promise) {

  return Promise.all([
    // Deletes ALL existing entries
    knex('projects').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 15; i++) {
          arr.push({ name: faker.name.findName(), description: faker.random.words(), completed: faker.random.arrayElement([true, false]) })
        }
        return knex('projects').insert(arr);
      }),

      knex('actions').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push({ description: faker.lorem.sentence(), notes: faker.lorem.sentence(), completed: faker.random.arrayElement([true, false]), projectId: faker.random.number({min:1, max:10}) })
        }
        return knex('actions').insert(arr);
      }),

      knex('contexts').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push({ context: faker.random.arrayElement(['home', 'office', 'at computer'])});
        }
        return knex('contexts').insert(arr);
      }),

      knex('projectscontexts').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push({ projectId: faker.random.number({min:1, max:6}), contextId: faker.random.number({min:1, max:6}) });
        }
        return knex('projectscontexts').insert(arr);
      }),

      knex('actionscontexts').del()
      .then(function () {
        // Inserts seed entries
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push({ actionId: faker.random.number({min:1, max:6}), contextId: faker.random.number({min:1, max:6}) });
        }
        return knex('actionscontexts').insert(arr);
      }),
  ])
};
