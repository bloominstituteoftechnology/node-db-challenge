
exports.up = function(knex, Promise) {
    return knex.schema.table('projects', function(projects) {
        projects.renameColumn('discription', 'description');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('projects', function(projects) {
        projects.renameColumn('description', 'discription');
    });
};
