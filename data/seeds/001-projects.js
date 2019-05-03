
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: "Clean out my closet", description: 'Clear out the disaster, and donate clothes that do not fit.' },
        { name: "Give my dog, Jolie a bath", description: 'Need to give the smelly monster a bath.' }
      ]);
    });
};
