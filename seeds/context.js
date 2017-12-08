exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('contexts')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('contexts').insert([
                { 'id': 1, context: 'Site' },
                { 'id': 2, context: 'Office' },
                { 'id': 3, context: 'Parts Store' },
            ]);
        });
  };