exports.seed = function(knex){
    return knex('resource').insert([
        {resource_name: 'person', resource_description: 'resource 1'},
        {resource_name: 'tool', resource_description: 'resource 2'},
        {resource_name: 'meeting', resource_description: 'resource 3'},
        {resource_name: 'software', resource_description: 'resource 4'},
    ]);
};