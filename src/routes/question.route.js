const express = require('express');
const router = express.Router();
const validateRequest = require('../middleware/validation.middleware');
const questionDto = require('../validations/question.dto');
const generateResponse = require('../controllers/question.controller');



router.post('/ask', validateRequest(questionDto), generateResponse);

module.exports = router;
