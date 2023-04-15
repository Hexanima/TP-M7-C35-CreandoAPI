const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');


//Rutas exigidas para la creación del CRUD
router.post('/api/movies/create', moviesController.create);
router.delete('/api/movies/delete/:id', moviesController.destroy);

module.exports = router;