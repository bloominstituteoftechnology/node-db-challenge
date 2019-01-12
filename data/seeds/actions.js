
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {"description":"Check this out","notes":"Sucess","complete":0,"project_id":3},
        {"description":"this is a description","notes":"Tech is great","complete":1,"project_id":2},
        {"description":"tech","notes":"working well","complete":0,"project_id":1},
      ]);
    });
};
