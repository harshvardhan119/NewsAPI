

# Global News API for Farmers

This project provides a global-level news API tailored for farmers. It aggregates and delivers relevant news, such as agricultural updates, market trends, weather reports, and policies that affect the farming community. The API is built using Node.js and Express and can serve as a backend for applications aimed at farmers.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Provides up-to-date news related to agriculture, markets, and weather.
- Global coverage with region-specific filtering options.
- Supports various news sources and categories.
- Optimized for serving farmer communities worldwide.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/harshvardhan119/NewsAPI.git
   cd farmer-news-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory of the project with the necessary environment variables (refer to [Environment Variables](#environment-variables)).

4. **Run the project**:

   ```bash
   node main.js
   ```

The server will run locally on `http://localhost:3000`.

## API Endpoints

### 1. Get Latest News
   **GET /api/news**

   Fetch the latest global news relevant to farmers.

   #### Parameters (Optional)
   - `category` (string): Filter news by category (e.g., `agriculture`, `weather`, `market`).
   - `region` (string): Filter news by region or country (e.g., `India`, `US`, `Africa`).

   #### Example Request
   ```bash
   GET http://localhost:3000/api/news/agriculture?category=agriculture&region=India
   ```

   #### Example Response
   ```json
   {
     "status": "success",
     "data": [
       {
         "title": "New Agricultural Policies in India",
         "description": "The government has announced new policies aimed at improving crop yields...",
         "url": "https://example.com/article/new-agricultural-policies",
         "publishedAt": "2024-10-04T10:30:00Z"
       },
       {
         "title": "Weather Forecast: Rain Expected in Midwest US",
         "description": "Farmers in the Midwest can expect rain next week...",
         "url": "https://example.com/article/weather-forecast",
         "publishedAt": "2024-10-04T09:15:00Z"
       }
     ]
   }
   ```

### 2. Get News by Category
   **GET /api/news/category/:category**

   Fetch news filtered by a specific category (e.g., `agriculture`, `market`, `weather`).

   #### Example Request
   ```bash
   GET http://localhost:3000/api/news/category/market
   ```

### 3. Get News by Region
   **GET /api/news/region/:region**

   Fetch news filtered by a specific region or country (e.g., `India`, `US`, `Africa`).

   #### Example Request
   ```bash
   GET http://localhost:3000/api/news/region/India
   ```

### 4. Get Single News Article
   **GET /api/news/:id**

   Fetch a specific news article by its unique ID.

   #### Example Request
   ```bash
   GET http://localhost:3000/api/news/615d1b9a1e4c2a001f3d1c42
   ```

## Project Structure

```bash
.
├--main.js        # Server startup
├── .env                 # Environment variables (not committed to version control)
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Environment Variables

Make sure you configure the following environment variables in your `.env` file:

```
# Server Configuration
PORT=3000

# News API (e.g., from a third-party service)
NEWS_API_KEY=your_news_api_key
NEWS_API_URL=https://newsapi.example.com/v2/

# Region-specific API keys (if applicable)
REGION_API_KEY=your_region_api_key
```

- **NEWS_API_KEY**: The API key for the news provider (e.g., NewsAPI, custom data sources).
- **NEWS_API_URL**: Base URL of the news provider’s API.
- **REGION_API_KEY**: (Optional) Keys for region-specific data sources.

## Usage

Once your API is running, you can make requests to the endpoints using tools like [Postman](https://www.postman.com/) or directly from a frontend application.

Example request using `curl`:

```bash
curl http://localhost:3000/api/news?category=agriculture&region=India
```

### Sample Frontend Integration

To integrate this API with a frontend for farmers, you could build a simple web app or mobile app that fetches data from your API and displays relevant news updates to users.

## Contributing

We welcome contributions to this project! Here's how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

