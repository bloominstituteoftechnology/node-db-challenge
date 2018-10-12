
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pjts', function(tbl) {
      tbl.increments().primary();

      tbl.string('pjts_nme').notNullable();
      tbl.string('pjts_dsc').notNullable();
      tbl.boolean('pjts_cpt').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pjts');
};
