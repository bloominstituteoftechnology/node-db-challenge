
exports.up = function(knex, Promise) {
    //create Table actions 
    return knex.schema.createTable('actions', function(actions){
        actions.increments();
        actions.text('name',128).notNullable();
        actions.string('description',255).notNullable();
        actions.boolean('isCompleted').defaultTo(false);
        actions
            .integer('project_id')
            .notNullable()
            .references('id')
            inTable('projects')
            .unUpdate('CASCADE')
            .onDelete('RESTRICT')
    })

  
};

exports.down = function(knex, Promise) {
  //Drop Action Table 
  return Knex.schema.dropTable('actions')
};
