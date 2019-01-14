
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { 
        description: 'Summary Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you will need to build production-quality Node applications. ', 
        notes: 'Authors: Mike Cantelon, Marc Harter, Nathan Rajlich, T. J. Holowaychuk',
        completed: false,
        projects_id: 1 },
        { 
          description: 'Beginning Node.js is your step-by-step guide to learning all the aspects of creating maintainable Node.js applications. You will see how Node.js is focused on creating high-performing, highly-scalable websites, and how easy it is to get started. ', 
          notes: 'Author: asarat Ali Syed',
          completed: false,
          projects_id: 1 }
      ]);
    });
};
