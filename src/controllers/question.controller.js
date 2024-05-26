
const QuestionService = require('../services/question.service');


const questionService = new QuestionService()

const generateResponse = async(request, response)=> {
    try {
        const {question} = request.validData;
        const result = await questionService.generateResponse(question);

        return response.json(result)
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Error generating response" });
    }
}

module.exports = generateResponse;