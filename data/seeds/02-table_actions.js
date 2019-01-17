
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { 
        adescription: 'Summary Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you will need to build production-quality Node applications. ', 
        anotes: 'Authors: Mike Cantelon, Marc Harter, Nathan Rajlich, T. J. Holowaychuk',
        acompleted: false,
        projects_id: 1 },
        { 
          adescription: 'Beginning Node.js is your step-by-step guide to learning all the aspects of creating maintainable Node.js applications. You will see how Node.js is focused on creating high-performing, highly-scalable websites, and how easy it is to get started. ', 
          anotes: 'Author: asarat Ali Syed',
          acompleted: false,
          projects_id: 1 }
      ]);
    });
};
