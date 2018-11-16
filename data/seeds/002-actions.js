exports.seed = function(knex, Promise) {
  return knex("actions")
    .truncate()
    .then(function() {
      return knex("actions").insert([
        {
          project_id: 1,
          description: "finish MVP",
          additional_notes: "see README for details",
          completed: "true"
        },
        {
          project_id: 1,
          description: "complete at least one stretch goal"
        },
        {
          project_id: 1,
          description: "triple-check that you did a pull request",
          additional_notes: "you've forgotten like 3 times this past week"
        },
        { project_id: 2, description: "go over sprint challenge" },
        { project_id: 2, description: "go over yesterday's project" },
        {
          project_id: 3,
          description: "get car fixed",
          additional_notes: "probably sell car"
        },
        {
          project_id: 3,
          description: "clean garage",
          additional_notes: "y it so nasty tho"
        },
        {
          project_id: 3,
          description:
            "go deeper into material from these past 2 weeks of material",
          additional_notes:
            'read "dive deeper" articles, go further into SQL tutorials on W3schools'
        },
        {
          project_id: 3,
          description: "at some point actually sleep",
          additional_notes: "but probably not"
        }
      ]);
    });
};
