exports.seed = function(knex) {
    return knex("projects")
        .del()
        .then(function() {
            return knex("projects").insert([
                {
                    id: 1,
                    name: "New Branch In Chicago",
                    description: "Strategy for 2019",
                    complete: true
                },
                {
                    id: 2,
                    name: "New Branch In Iowa City",
                    description: "Strategy for 2019-2020",
                    complete: true
                },
                {
                    id: 3,
                    name: "New Branch in Denver",
                    description: "Beyond and above",
                    complete: true
                },
                {
                    id: 4,
                    name: "New Branch in Paris",
                    description: "International market",
                    complete: false
                }
            ]);
        });
};
