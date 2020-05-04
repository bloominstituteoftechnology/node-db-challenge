const db = require("../data/config")

function find(){
    return db("schemes")
        .select("*")
    }

function findById(id){
    return db('schemes').where({ id }).first();
    }

function findSteps(id){
    return db('schemes')
        .join('steps', 'steps.scheme_id', '=', 'schemes.id')
        .select('schemes.id', 'schemes.scheme_name','steps.step_number', 'steps.instructions')
        .where("schemes.id", id)
    }

function add(scheme){
    return db('schemes')
    .insert({scheme_name: scheme.scheme_name})
    }

function update(changes, id){
    return db('schemes')
    .where({id})
    .update({scheme_name: changes.scheme_name})
}

function remove(id){
    return db('schemes')
    .where({id})
    .del()
}

    module.exports = {
        findById, find, findSteps, add, update, remove,
    }