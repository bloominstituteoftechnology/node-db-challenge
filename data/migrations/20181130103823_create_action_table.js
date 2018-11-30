
exports.up = function(knex, Promise) {
    return knex.shema.createTable('tasks', function(table){
        table.increments();
          table.string('name').notNullable();
          table.string('description').notNullable();
         table.boolean('completed').notNullable().defaultTo(false);
         table
         .integar('id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('tasks');
   
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tasks');
};
