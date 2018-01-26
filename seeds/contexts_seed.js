
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'the context'},
        {id: 2, context: 'context 2'},
        {id: 3, context: 'context 3'},
        {id: 4, context: 'context 4'},
        {id: 5, context: 'another context'} 
      ]);
    });
};
