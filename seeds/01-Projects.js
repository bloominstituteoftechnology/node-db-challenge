exports.seed = function(knex) {

    return knex('projects').truncate()
    .then(function () {

        return knex('projects').insert([
            {name: 'Sprint Challenge', description: 'These are fun and stressful', completed: false},
            {name: 'A Computer', description: 'My best friend', completed: false},
            {name: 'Code', description: 'I make stuff with this', completed: false}
          ]);
        });
    };