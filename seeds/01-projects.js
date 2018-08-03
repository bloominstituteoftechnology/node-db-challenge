
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { 
          name: 'Turn Cheese Into Gold', 
          description: 'Produce a machine that can take any type of cheese and turn it into gold',
          completed: false
        },
        { 
          name: 'Make Edible Concrete',
          description: 'Concrete should be practical and delicious',
          completed: false
        },
        { 
          name: 'Fly to the Center of the Milky Way',
          description: 'Just for kicks',
          completed: false
        }
      ]);
    });
};
