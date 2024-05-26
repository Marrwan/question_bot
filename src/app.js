require('dotenv').config();
const express = require('express');
const routes = require('./routes/question.route');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.all("*", (request, response) => {
    return response.status(404).json({error: "PAGE NOT FOUND"})
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
