
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', table => {
  	table.increments();
  	table.string('contexts').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};

// one context can appear in many actions and projects