const express = require('express');
const albumController = require('../controllers/album');

const router = express.Router();

router.post('/', albumController.create);

router.get('/', albumController.read);

router.get('/:albumId', albumController.findAlbumById);

router.delete('/:albumId', albumController.delete);

module.exports = router;
