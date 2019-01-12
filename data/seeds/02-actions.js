exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          act_descr: "this 1st action is a thing that needs to be done",
          act_notes: "this note is perfect for this action",
          act_complete: false,
          proj_id: 1
        },
        {
          act_descr:
            "this other action is also a thing that needs to be done on this project",
          act_notes:
            "this note is less perfect for this action than for the other one, but what are you gonna do",
          act_complete: false,
          proj_id: 1
        }
      ]);
    });
};
