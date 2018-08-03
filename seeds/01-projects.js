
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { 
          id: 1,
          name: 'Turn Cheese Into Gold', 
          description: 'Produce a machine that can take any type of cheese and turn it into gold',
          completed: false
        },
        { 
          id: 2,
          name: 'Make Edible Concrete',
          description: 'Concrete should be practical and delicious',
          completed: false
        },
        { 
          id: 3,
          name: 'Fly to the Center of the Milky Way',
          description: 'Just for kicks',
          completed: false
        }
      ]);
    });
};
