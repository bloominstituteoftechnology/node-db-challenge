exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex("projects").insert([
    { projectName: "Eat Spicy Hot Dog", projectDescription: "Put that Spicy Dog in your Mouth, Eat it.", completed: true },
    { projectName: "Projcet Test 2", projectDescription: "Finish This Sprint Boi", completed: false },
  ]);
};
