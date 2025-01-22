const { Router } = require('express');
const { fileanalyse } = require('../controllers/fileanalyse');
const multer = require('multer');

const fileUpload = multer({ dest: 'uploads/' });

const router = Router();

router.post('/', fileUpload.single('upfile'), fileanalyse);

module.exports = router;
