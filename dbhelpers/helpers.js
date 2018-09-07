const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  get: (id, which) => {
    return db(which)
      .then(rows => {
        return rows;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  delete: (id, which) => {
    return db(which)
      .where({ id: id })
      .del();
  },
  insert: (body, which) => {
    return db(which).insert({ ...body });
  },
  edit: (id, body, which) => {
    return db(which)
      .where({ id: id })
      .update({ ...body });
  },
  getProject: (id) => {
    return db('projects')
    .where({'id':id})
      .then(row => {
        let modrow = row[0];
        return db("actions")
        .where({project_id: modrow.id})
        .then(r => {
          modrow.actions=[...r];
          if(modrow.complete==0){
            modrow.complete= false;
          }
          else{
            modrow.complete= true;
          }
          modrow.actions.forEach(element => {
            if(element.complete==0){
              element.complete= false;
            }
            else{
              element.complete= true;
            }
          });
          return modrow
        })
      })
      .catch(function(error) {
        console.error(error);
      });
  },
};
