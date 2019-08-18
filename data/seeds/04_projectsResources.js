exports.seed = function(knex) {
    return knex("projectsResources")
        .del()
        .then(function() {
            return knex("projectsResources").insert([
                {
                    project_id: 1,
                    resource_id: 1
                },
                {
                    project_id: 1,
                    resource_id: 2
                },
                {
                    project_id: 2,
                    resource_id: 2
                },
                {
                    project_id: 3,
                    resource_id: 3
                }
            ]);
        });
};
