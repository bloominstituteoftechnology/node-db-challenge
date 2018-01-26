
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments(); // by default it will be called id
    
        tbl
          .string('context', 255)
          .notNullable();
    
        tbl.timestamp('created_at')
        .defaultTo(knex.fn.now()); // i'm creating this, it handy to have
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contexts');
};
