
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects_Actions_XREF').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects_Actions_XREF').insert([
        {IdProject: 1, IdAction: '1', IdStatus:'3'},
        {IdProject: 1, IdAction: '2', IdStatus:'2'},
        {IdProject: 1, IdAction: '3', IdStatus:'1'}
      ]);
    });
};
