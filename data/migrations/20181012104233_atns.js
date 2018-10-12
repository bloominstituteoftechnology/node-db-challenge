
exports.up = function(knex, Promise) {
  return knex.schema.createTable('atns', function(tbl) {
      tbl.increments().primary();

      tbl
        .integer('pjts_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('pjts');
    
    tbl.string('atns_dsc').notNullable();
    tbl.string('atns_nts').notNullable();
    tbl.boolean('atns_cpt').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('atns');
};
