
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('action').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('action').insert([
                {project_id: 1, description: 'Relational data base management system', notes: 'Notes', completed: false},
                {project_id: 2, description: 'A discord Bot', notes: 'Notes', completed: true},
                {project_id: 3, description: 'A slack bot', notes: 'Notes', completed: false}
            ]);
        });
};
