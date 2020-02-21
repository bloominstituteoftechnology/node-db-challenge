exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        {
          resource_name: "Training kit",
          resource_description: "Go back and look at what you need help on"
        },
        {
          resource_name: "Google",
          resource_description: "When in doubt, Google it!"
        },
        {
          resource_name: "All purpose spray",
          resource_description: "Clean that mess up!!"
        },
        {
          resource_name: "Dish soap",
          resource_description: "Get those dishes clean!"
        },
        {
          resource_name: "Laptop",
          resource_description: "Can't code without a computer!"
        }
      ]);
    });
};
