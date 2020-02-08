exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "Turn On Computer",
      project_desc: "Computer is off, turn it on!",
      project_completed: true
    },
    {
      project_name: "Debug Code",
      project_desc: "Fixing all those STUPID errors..grrr...!",
      project_completed: false
    }
  ]);
};
