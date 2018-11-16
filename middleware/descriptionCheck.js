module.exports = (req, res, next) => {
  req.body.description && typeof req.body.description === 'string' && req.body.description.length < 256
  ? next()
  : res.json({ error: "please provide a 'description' that is a string (i.e., in quotes) and under 256 characters" })
}