exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          id: 1,
          description: "rowValue1",
          notes: "I am a note",
          completed: false,
          project_id: 1
        },
        {
          id: 2,
          description: "rowValue2",
          notes: "This is a note",
          completed: false,
          project_id: 1
        },
        {
          id: 3,
          description: "rowValue3",
          notes: "What am I a note?",
          completed: false,
          project_id: 2
        }
      ]);
    });
};
