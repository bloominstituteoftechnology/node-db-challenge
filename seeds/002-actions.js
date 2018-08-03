exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "rowValue1",
          notes: "rowValue1",
          completed: "",
          project_id: 1
        },
        {
          description: "rowValue2",
          notes: "rowValue2",
          completed: "",
          project_id: 2
        },
        {
          description: "rowValue3",
          notes: "rowValue3",
          completed: "",
          project_id: 3
        }
      ]);
    });
};
