
exports.up = function(knex, Promise) {
    knex.schema.dropTableIfExists('actions');
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments(); // by default it will be called id

        tbl
          .text('description')
          .notNullable();
          
        tbl
          .text('notes')
          .notNullable();
        
        tbl
          .boolean('completed')
          .notNullable()
          .defaultTo(false);

        tbl.integer('projectId')
        .unsigned()
        .notNullable()
        .references('id').inTable('projects') // foreign key relationship
        .onDelete('CASCADE'); // make sure there is no orphan data when u delete parent data

        tbl.timestamp('created_at')
        .defaultTo(knex.fn.now()); // i'm creating this, it's handy to have
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
