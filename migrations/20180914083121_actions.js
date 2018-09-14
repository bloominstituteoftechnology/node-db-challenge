
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){

    tbl
    .increments();

    tbl
    .string('description')
    .notNullable()

    tbl
    .string('notes')
    .notNullable()

    tbl
    .string('flag', 128)
    .notNullable()


    
    // I want to create a foreign key relationship to my primary in projects but it's not working
    tbl
    .integer('relationship')
    // .unsigned()
    // .notNullable()
    // .reference('id')
    // .inTable('projects')

    // this won't work...
    // migration file "20180914083121_actions.js" failed
    // migration failed with error: tbl.integer(...).unsigned(...).reference is not a function
    // TypeError: tbl.integer(...).unsigned(...).reference is not a function
    // at TableBuilder._fn (/Users/EricaThompson/Development/LambdaSchool/Sprint-Challenge-RDBMS/migrations/20180914083121_actions.js:23:6)



});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
};