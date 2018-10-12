exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', (tbl) => {
        tbl.increments();
        tbl.string('description').notNullable();
        tbl.string('notes', 65535);
        tbl.boolean('is_complete').defaultTo('false');
        // README.md line 32: "**Add relationships** as you see fit."
        tbl.integer('project_id').unsigned().references('id').inTable('projects');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
