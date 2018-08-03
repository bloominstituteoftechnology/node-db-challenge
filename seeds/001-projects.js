exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "rowValue1", description: "rowValue1", completed: "" },
        { name: "rowValue2", description: "rowValue2", completed: "" },
        { name: "rowValue3", description: "rowValue3", completed: "" }
      ]);
    });
};
