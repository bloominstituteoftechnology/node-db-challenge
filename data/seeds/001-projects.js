exports.seed = function(knex, Promise) {

    return knex('projects').truncate()
    .then(function () {

        // Inserts seed entries

        return knex('projects').insert([
        {name: 'Fortnite Gilders', description: 'Fortnite gliders being implemented correctly', completed: false},
        {name: 'Bloom on all guns', description: 'An extremely way of implementing recoil, must be patched', completed: false},
        {name: 'Me Being tilted', description: 'I play this game constantly, yet am constatly salty about its mechanics', completed: true}
        ]);
    });
};