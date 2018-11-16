

//== Project Constants =========================================================

const PORT = 3300; // To Do: Get this from the command line
module.exports = {
    // Server Configuration
    PORT: PORT,
    MESSAGE_SERVER_START: `\nServer started on port ${PORT}\n`,
    // Route Paths
    // Database Strings
    TABLE_ACTIONS : 'actions' ,
    TABLE_PROJECTS: 'projects',
    FIELD_ID      : 'id'         ,
    FIELD_NAME    : 'name'       ,
    FIELD_DESC    : 'description',
    FIELD_NOTES   : 'notes'      ,
    FIELD_COMPLETE: 'complete'   ,
};
