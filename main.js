require('dotenv').config();
const express = require('express');
const NewsAPI = require('newsapi');
const cors = require('cors');

const apiKey = process.env.GEMINI_API_KEY;
const app = express();
const port = process.env.PORT || 3000;


const newsapi = new NewsAPI(apiKey); 
app.use(cors());

app.get('/api/news/agriculture', async (req, res) => {
  try {
    const response = await newsapi.v2.everything({
      q: 'farming OR agriculture OR farmers', 
      language: 'en', 
      sortBy: 'relevancy',
      
    });

    if (response.status === 'ok') {
      res.json({
        status: 'success',
        articles: response.articles,
      });
    } else {
      res.status(500).json({
        status: 'error',
        message: 'Error fetching news',
        details: response,
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while fetching news.',
      error: error.message,
    });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
