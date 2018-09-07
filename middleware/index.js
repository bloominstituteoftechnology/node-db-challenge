exports.assignTable = (req, res, next) => {
    req.url.includes('projects') ? req.tableName = `projects` : req.tableName = `actions`
    next()
}

exports.errorHandler = (err, req, res, next) => {
    console.log(err)
    res.status(500)
        .json({
            message: `Something broke`
        })
}