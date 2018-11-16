exports.seed = knex =>
  knex("actions")
    .truncate()
    .then(() =>
      knex("actions").insert([
        {
          project_id: 1,
          description: "Lorem ipsum dolor sit amet.",
          notes:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, ipsam laborum inventore maxime ratione veritatis praesentium ullam quam debitis!"
        },
        {
          project_id: 1,
          description: "Lorem, ipsum dolor.",
          notes:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti?"
        }
      ])
    );
