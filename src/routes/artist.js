const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.create);

router.get('/', artistController.read);

router.get('/:artistId', artistController.findArtistById);

router.patch('/:artistId', artistController.update);

module.exports = router;
