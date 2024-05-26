# AI Chatbot API with OpenAI

This is a simple Node.js API that uses OpenAI to generate responses and follow-up questions based on user input.

**Requirements:**

* Node.js and npm installed

**Setup:**

1. Clone this repository.
2. Install dependencies: `npm install`
3. copy the .env.example file using `cp .env.example .env`
5. Replace `YOUR_OPENAI_API_KEY` in `.env` with your OpenAI API key.
4. Start the server: `npm run dev` (or run with a process manager like pm2 if you want)

**Usage:**

Make a POST request to `/ask` with the following JSON body:

```json
{
  "question": "Your user message here"
}

```
**EXAMPLE REQUEST:**

```json
{
  "question": "Who was the richest man on earth in 1990?"
}
```

**Example Response:**

```json
{
  "response": "In 1990, the richest man on earth was Japanese businessman and philanthropist, Yoshiaki Tsutsumi. He had a net worth of around $20 billion at the time.",
  "follow_up_questions": [
    {
      "question": "1. How did Yoshiaki Tsutsumi acquire such a large net worth?"
    },
    {
      "question": "2. How did his philanthropy and business ventures contribute to his wealth?"
    },
    {
      "question": "3. Has anyone surpassed Yoshiaki Tsutsumi as the richest man on earth since 1990?"
    },
    {
      "question": "4. What impact did Yoshiaki Tsutsumi have on the Japanese economy during his time as the richest man?"
    }
  ]
}
```