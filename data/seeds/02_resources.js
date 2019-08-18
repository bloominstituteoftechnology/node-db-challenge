exports.seed = function(knex) {
    return knex("resources")
        .del()
        .then(function() {
            return knex("resources").insert([
                {
                    id: 1,
                    name: "Make a list of real estate agencies",
                    description: "Priority one"
                },
                {
                    id: 2,
                    name: "Meeting with HR-department",
                    description: "Priority two"
                },
                {
                    id: 3,
                    name: "Confirm the budget",
                    description: "Priority three"
                },
                {
                    id: 4,
                    name: "Conference call with the investors",
                    description: "Priority four"
                }
            ]);
        });
};
