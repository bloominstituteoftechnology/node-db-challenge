exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Operation Friendly Ghost",
          description:
            "Execute trick-or-treating and other frivolities while adhering to post-wide safety protocal and enforcing curfew compliance"
        },
        {
          name: "Operation Cat and Mouse",
          description:
            "Conduct investigation and analysis of when the hell this weather is going to clear up"
        },
        {
          name: "Assemble Task Force for Operation Pink Panther",
          description:
            "Taskforce operations and assembly for operation Pink Panther: confidential"
        }
      ]);
    });
};
