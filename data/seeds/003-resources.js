exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "Power Cable",
      resource_desc: "For powah!!!"
    },
    {
      resource_name: "Computer",
      resource_desc: "I mean, duh..."
    },
    {
      resource_name: "Outlets.",
      resource_desc: ""
    },
    {
      resource_name: "VSCode, or similar editor",
      resource_desc: "Any code editor you use is fine."
    },
    {
      resource_name: "Patience.",
      resource_desc: "Keeping calm is important."
    },
    {
      resource_name: "Time.",
      resource_desc: "Take your time to figure it all out."
    },
    {
      resource_name: "Coffee.",
      resource_desc: "Fuel Your Brain."
    }
  ]);
};
