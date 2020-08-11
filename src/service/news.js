import {
  category,
  country_code,
  _api_key,
  articles_url
} from '../config/rest_config';

export async function getArticles(newsCategory = category) {
  try {
    let articles = await fetch(
      `${articles_url}country=${country_code}&category=${newsCategory}`,
      {
        headers: {
          'X-API-KEY': _api_key
        }
      }
    );

    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    throw error;
  }
}
