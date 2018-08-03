
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1,
        description:'Install Knex',
        notes:'Needs to be installed globally and locally'},
        {project_id: 2,
        description:'Access root servers',
        notes:'They will be highly protected, Luther could help...'},
        {project_id: 3,
        description:'Watch Westworld',
        notes:'Could be inspirational...'}
      ]);
    });
};
