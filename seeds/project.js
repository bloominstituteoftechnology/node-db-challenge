exports.seed = function (knex, Promise) {
  return knex('project')
    .del()
    .then(function () {
      return knex('project').insert([{
          name: "RDBMS",
          description: "Relation Database Management System",
        }
      ]);
    });
};