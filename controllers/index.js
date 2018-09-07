'use strict'

const dbModel = require('../db/dbHelper/model')

exports.get = async (req, res, next) => {
    try {
        res.status(200).json({
            ...await dbModel.get(req.tableName)
        })
    } catch (err){
        next(err)
    }

}

exports.getProjectID = async (req, res, next) => {
    try {
        const data = await dbModel.getProject(Number(req.params.id))
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }

}

exports.post = async (req, res, next) => {
    try {
        let data;
        if (req.tableName == 'projects')
            data = await dbModel.addProject(req.body)
        else 
            data = await dbModel.addAction(req.addAction)

        res.send(200).json(data)
    }catch (err) {
        next(err)
    }

}

exports.del = async (req, res, next) => {
    try {
        const deleted = await dbModel.delete(req.tableName, req.params.id)
        res.send(200).json(deleted)
    }catch (err) {
        next(err)
    }
}


exports.update = async (req, res, next) => {
    try {
        let data;
        if (req.tableName == 'projects')
            data = await dbModel.updateProject(req.body)
        else 
            data = await dbModel.updateAction(req.addAction)

        res.send(200).json(data)
    }catch (err) {
        next(err)
    }
}
