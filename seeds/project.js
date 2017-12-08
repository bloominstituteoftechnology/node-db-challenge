exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('projects')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([
                { 'id': 1, name: 'Starbucks newbuild', description: 'Starbucks Franchise Specs', completed: false },
                { 'id': 2, name: 'Dunkin Donuts newbuild', description: 'Dunkin Donuts Franchise Specs', completed: false },
                { 'id': 3, name: 'McDonald newbuild', description: 'McDonald Franchise Specs', completed: false },
            ]);
        });
  };