const OpenAI = require("openai");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apikey: OPENAI_API_KEY,
});

class QuestionService {
  generateResponse = async (question) => {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: question,
      max_tokens: 150,
      n: 1,

      temperature: 0.7,
    });
    let text = response.choices[0].text;
    text = text.replace(/\n/g, "");
    const followUpQuestionsPrompt = `Given the following response, generate four follow-up questions based on the context.\nResponse: ${text}\nFollow-up questions:`;

    const follow_up = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: followUpQuestionsPrompt,
      max_tokens: 150,
      n: 1,
      stop: "\n** End of questions **",
      temperature: 0.7,
    });
    let follow_up_text = follow_up.choices[0].text;
    const followUpQuestions = follow_up_text
      .split("\n")
      .slice(1, 5)
      .map((q) => ({ question: q.trim() }));

    return { response: text, follow_up_questions: followUpQuestions };
  };
}

module.exports = QuestionService;
