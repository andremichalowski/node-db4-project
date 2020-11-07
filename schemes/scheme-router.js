const express = require('express'); //import
const router = express.Router(); //instantiate
router.use(express.json()) //configure

// CRUD ENDPOINTS WITH ROUTER GO HERE

router.get('/routerTest', (req, res) => {
  res.status(200).json({ router: "Test GET request from scheme-router"})
})
// router.get('/', (req, res) => {...}
// router.get('/:id', (req, res) => {...}
// router.post('/', (req, res) => {...}
// router.delete('/:id', (req, res) => {...}
// router.put('/:id', (req, res) => {...}

module.exports = router; //export
