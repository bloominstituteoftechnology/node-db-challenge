const db = require('./dbConfig');

module.exports = {
  find,
  add
};

function find(dbn, id=0) {
  if(!dbn) throw "database name cant be empty";
  if(id && id > 0)
  {
    if(dbn === "projects") return findProject(id);
   db(dbn)
    .where({ id })
    .first();
  }
  return db(dbn);
}

async function findProject(itemnumber)
{
    let actions = await db.select("actions.description", "actions.notes", "actions.completed")
    .from("action_map")
    .where("action_map.project_id", itemnumber)
    .join("actions", "action_map.action_id", "actions.id" );
    
    let project = await db.select("id","name", "description", "completed")
    .from("projects").where("id", itemnumber).first();

    project.actions = await actions;
    return project;
}
async function update(dbn,id, changes)
{
  let i = await db(dbn)
  .where({ id })
  .update(changes, '*');
  return find(i);
}
async function add(dbn, item, fixcomplete = true)
{
    let actions;
    if(dbn === 'actions') item.completed = false;
    if(dbn === 'projects')  actions = item.actions ? item.actions : [];
    delete item.actions;
    let newitem = await db(dbn)
    .insert(item, "*");
    switch(dbn)
    {
      case"actions":
        if(fixcomplete) update("projects", item.project_id, {completed: false});
        await db("action_map").insert({ project_id: item.project_id, action_id: newitem[0]});
        break;
      case "projects":
        await actions.forEach(async function(x)
        {
          x.project_id = newitem[0];
          let action = await db("actions").insert(x, "*");
          let a = await db("action_map").insert({ project_id: newitem[0], action_id: action[0]});
        });
      break;
    }
    return find(dbn, newitem[0]);
}
