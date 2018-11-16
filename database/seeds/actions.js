  
  
//== Seed Actions Table ========================================================

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Seeding -------------------------------------
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(config.TABLE_ACTIONS).del()
    // Inserts seed entries
    .then(function () {
        return knex(config.TABLE_ACTIONS).insert([
            {
                [config.FIELD_DESC]: "Start Server",
                [config.FIELD_NOTES]: "Ensure server starts without errors",
                [config.FIELD_PROJECT_ID]: 1,
                [config.FIELD_COMPLETED]: true,
            },
            {
                [config.FIELD_DESC]: "Test API",
                [config.FIELD_NOTES]: "Make requests to each endpoint using each method. Ensure everything functions per spec",
                [config.FIELD_PROJECT_ID]: 1,
                [config.FIELD_COMPLETED]: true,
            },
            {
                [config.FIELD_DESC]: "Commit to Origin",
                [config.FIELD_NOTES]: "Commit changes and push to Origin",
                [config.FIELD_PROJECT_ID]: 1,
                [config.FIELD_COMPLETED]: true,
            },
        ]);
    });
};
