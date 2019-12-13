
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        {id: 1, description: "surf internet", notes: "it's what i like to do", proj_id: 1},
        {id: 2, description: "write", notes: "", proj_id: 2},
      ]);
    });
};
