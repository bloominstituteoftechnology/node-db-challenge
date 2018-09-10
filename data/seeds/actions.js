exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "Build the structure",
          notes:
            "build up the structure with wood, then fill in with other materials",
          completed: false,
          project_id: 1
        },
        {
          description: "Attach necessities",
          notes: "attach electrical, plumbing, and any other necessities",
          completed: false,
          project_id: 1
        },
        {
          description: "Fill with furnishing",
          notes: "fill in the inside and outside with any other furnishing",
          completed: false,
          project_id: 1
        },
        {
          description: "Begin building yourself",
          notes:
            "your life is just beginning, take it as it is and do not worry too much, you will learn as you go",
          completed: false,
          project_id: 2
        },
        {
          description: "Learn from your mistakes",
          notes:
            "remember what you did wrong and try not to do it again, learning is a part of life and it is not easy",
          completed: false,
          project_id: 2
        },
        {
          description: "Enjoy it",
          notes:
            "enjoy your life as much as you can, enjoy the little things, enjoy the journey and the people in it, enjoy yourself",
          completed: false,
          project_id: 2
        },
        {
          description: "Buy parts",
          notes: "buy all the parts you want",
          completed: false,
          project_id: 3
        },
        {
          description: "Assemble your parts",
          notes: "put together accordingly",
          completed: false,
          project_id: 3
        },
        {
          description: "Turn it on",
          notes:
            "press the power button only to realize you messed something up, then go back and take everything apart until you figure out what you did wrong",
          completed: false,
          project_id: 3
        },
        {
          description: "Turn it on again",
          notes: "press the power button again after you built correctly",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
