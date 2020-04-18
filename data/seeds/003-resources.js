
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name:'resourceOne', description:'resource for the first project', project_id: 1 },
        { name:'resourceTwo', description:'resource for the second project', project_id: 2 },
        { name:'resourceThird', description:'resource for the third project', project_id: 3 }
      ]);
    });
};
