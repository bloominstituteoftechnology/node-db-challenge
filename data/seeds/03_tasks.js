exports.seed = function(knex) {
    return knex("tasks")
        .del()
        .then(function() {
            return knex("tasks").insert([
                {
                    id: 1,
                    description: "Find a place for our new office",
                    notes: "...",
                    complete: true,
                    project_id: 1
                },
                {
                    id: 2,
                    description: "Find a CTO for our  new branch",
                    notes: "...",
                    complete: true,
                    project_id: 1
                },
                {
                    id: 3,
                    description: "Find UX designer for our branch in IA",
                    notes: "...",
                    complete: true,
                    project_id: 2
                },
                {
                    id: 4,
                    description: "Make an welcome party for new team members",
                    notes: "...",
                    complete: true,
                    project_id: 2
                },
                {
                    id: 5,
                    description: "Set up interviews",
                    notes: "...",
                    complete: true,
                    project_id: 3
                },
                {
                    id: 6,
                    description: "Set up a trainin how to deal with bears",
                    notes: "...",
                    complete: true,
                    project_id: 3
                },
                {
                    id: 7,
                    description: "Find CEO for the branch in Paris",
                    notes: "...",
                    complete: false,
                    project_id: 4
                }
            ]);
        });
};
