router.get('/', (req, res) => {
    projects.find()
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   projects.findById(id)
//   .then(project => {
//     if (project) {
//       res.json(project);
//     } else {
//       res.status(404).json({ message: 'Could not find resource with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get resource' });
//   });
// });

module.exports = router;