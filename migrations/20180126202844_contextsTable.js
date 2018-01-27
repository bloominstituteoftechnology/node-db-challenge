
exports.up = function(knex, Promise) {
    knex.schema.dropTableIfExists('contexts');
    return knex.schema.createTable('contexts', function(tbl) {
        tbl.increments(); // by default it will be called id
    
        tbl
          .string('context', 255)
          .notNullable();
    
        tbl.timestamp('created_at')
        .defaultTo(knex.fn.now()); // i'm creating this, it handy to have
    });
  
};
//*/
/*
exports.up = knex.schema.dropTableIfExists('projects')
.createTable('projects', (table) => {
    table.increments();
    table.string('name', 255)
    notNullable();
    table.timestamp('created_at')
    .defaultTo(knex.fn.now());
})
.then(function() {
console.log('table created');
})
.catch(function(error) {
console.log(error);
});
*/


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contexts');
};

