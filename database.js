

//== Database Accessor =========================================================

//-- Dependencies --------------------------------
const knex       = require('knex'           );
const knexConfig = require('./knexfile.js'  );
const config     = require('./config.js');
const crudHelper = require('./crud-helper'  );

//-- Create and export Crud Helpers --------------
const knexDB = knex(knexConfig.development);
const projects       = crudHelper(knexDB, config.TABLE_PROJECTS       );
const actions        = crudHelper(knexDB, config.TABLE_ACTIONS        );
const contexts       = crudHelper(knexDB, config.TABLE_CONTEXTS       );
const actionContexts = crudHelper(knexDB, config.TABLE_ACTION_CONTEXTS);
module.exports = { projects, actions, contexts, actionContexts};


//== Add Custom Queries ========================================================

//-- Get a project by id, and include associate actions as an array
projects.get = async function (itemId) {
    // Get all projects (when no Id specified)
    if(!itemId){
        return await knexDB(config.TABLE_PROJECTS);
    }
    //
    if(itemId){
        let [project, associatedActions] = await Promise.all([
            knexDB(config.TABLE_PROJECTS).where({[config.FIELD_ID]: itemId}).first(),
            knexDB(config.TABLE_ACTIONS)
                .select(config.FIELD_ID, config.FIELD_DESC, config.FIELD_NOTES, config.FIELD_COMPLETED)
                .where({[config.FIELD_PROJECT_ID]: itemId}),
        ])
        project.actions = associatedActions;
        return project;
    }
}
//-- Get an action by id, and include associate context as an array
actions.get = async function (itemId) {
    // Get all projects (when no Id specified)
    if(!itemId){
        return await knexDB(config.TABLE_ACTIONS);
    }
    //
    if(itemId){
        let [action, associatedContexts] = await Promise.all([
            knexDB(config.TABLE_ACTIONS).where({[config.FIELD_ID]: itemId}).first(),
            knexDB(config.TABLE_CONTEXTS)
                .select(config.FIELD_NAME)
                .join(config.TABLE_ACTION_CONTEXTS,
                    `${config.TABLE_CONTEXTS}.${config.FIELD_ID}`,
                    `=`,
                    `${config.TABLE_ACTION_CONTEXTS}.${config.FIELD_CONTEXT_ID}`,
                )
                .where({[config.FIELD_ACTION_ID]: itemId}),
        ])
        action.contexts = associatedContexts;
        return action;
    }
}
