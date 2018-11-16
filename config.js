

//== Project Constants =========================================================

const PORT = 3000; // To Do: Get this from the command line
module.exports = {
    // Server Configuration
    PORT: PORT,
    MESSAGE_SERVER_START: `\nServer started on port ${PORT}\n`,
    // Route URLs
    URL_PROJECTS       : '/projects'       ,
    URL_ACTIONS        : '/actions'        ,
    URL_CONTEXTS       : '/contexts'       ,
    URL_ACTION_CONTEXTS: '/action_contexts',
    // Database Strings
    TABLE_ACTIONS        : 'actions'        ,
    TABLE_PROJECTS       : 'projects'       ,
    TABLE_CONTEXTS       : 'contexts'       ,
    TABLE_ACTION_CONTEXTS: 'action_contexts',
    FIELD_ID        : 'id'         ,
    FIELD_NAME      : 'name'       ,
    FIELD_DESC      : 'description',
    FIELD_NOTES     : 'notes'      ,
    FIELD_COMPLETED : 'completed'  ,
    FIELD_PROJECT_ID: 'project_id' ,
    FIELD_ACTION_ID : 'action_id'  ,
    FIELD_CONTEXT_ID: 'context_id' ,
};
