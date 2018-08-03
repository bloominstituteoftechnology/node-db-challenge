exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions_contexts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions_contexts").insert([
        { actions_id: "rowValue1", contexts_id: "rowValue1" },
        { actions_id: "rowValue2", contexts_id: "rowValue2" },
        { actions_id: "rowValue3", contexts_id: "rowValue3" }
      ]);
    });
};
