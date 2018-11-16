  
  
//== Seed Projects Table =======================================================

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Seeding -------------------------------------
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(config.TABLE_PROJECTS).del()
    // Inserts seed entries
    .then(function () {
        return knex(config.TABLE_PROJECTS).insert([
            {
                [config.FIELD_NAME]: "Test API",
                [config.FIELD_DESC]: "Test get and post paths to ensure that database access is functioning per spec.",
                [config.FIELD_COMPLETED]: true,
            },
            {
                [config.FIELD_NAME]: "Add Seeding",
                [config.FIELD_DESC]: "Add seed data for both projects and actions.",
                [config.FIELD_COMPLETED]: true,
            },
            {
                [config.FIELD_NAME]: "Add Contexts",
                [config.FIELD_DESC]: "Add support for action contexts, per spec.",
                [config.FIELD_COMPLETED]: false,
            },
        ]);
    });
};
