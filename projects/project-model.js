const db = require("../data/config")

function find(){
    return db("project")
        .select("*")
    }

function findById(id){
    return db('project').where({ id }).first();
    }

function findSteps(id){
    return db('project')
        .join('steps', 'steps.scheme_id', '=', 'project.id')
        .select('project.id', 'project.scheme_name','steps.step_number', 'steps.instructions')
        .where("project.id", id)
    }

function add(scheme){
    return db('project')
    .insert({scheme_name: scheme.scheme_name})
    }

function update(changes, id){
    return db('project')
    .where({id})
    .update({scheme_name: changes.scheme_name})
}

function remove(id){
    return db('project')
    .where({id})
    .del()
}

    module.exports = {
        findById, find, findSteps, add, update, remove,
    }