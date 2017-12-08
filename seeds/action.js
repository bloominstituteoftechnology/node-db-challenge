exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('actions')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('actions').insert([
                { 'id': 1, projectsId: '1', contextsId: '1', description: 'framing', notes: 'review blueprints', 'completed': false },
                { 'id': 2, projectsId: '2', contextsId: '2', description: 'flooring', notes: 'check for mold', 'completed': false },
                { 'id': 3, projectsId: '3', contextsId: '3', description: 'order windows', notes: 'compare prices, Lowes has discount', 'completed': false },
            ]);
        });
  };