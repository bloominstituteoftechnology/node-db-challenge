
exports.up = function(knex, Promise) {

    return knex.schema.createTable('actions', tbl => {
        tbl.increments();

        tbl.string('name', 128);

        tbl.text('description');

        tbl.text('notes');

        tbl.boolean('complete');

        tbl.unique('name', 'uq_actions_name')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions', tbl => {
        tbl.dropUnique('uq_actions_name');
    })
};
