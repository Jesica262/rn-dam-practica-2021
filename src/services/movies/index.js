import axios from 'axios';

// TODO : Add your API key here
// http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=
const API_KEY = 'f6de41f1';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

/**
 * Metodo que nos permite buscar una lista de películas nombre
 * @param movieName
 * @param pageNumber
 * @returns {Promise<void>}
 */
const getMovies = async ({movieName, pageNumber = 1}) => {
  const response = await axios.get(
    `${BASE_URL}&s=${movieName}&type=movie&page=${pageNumber}`,
  );
  console.log(response.data);
  const searchResult = toCamelCaseProps(response.data.Search);
  return searchResult;
};

/**
 * Metodo que nos permite buscar una película por su id
 * @param movieId
 * @returns {Promise<void>}
 */
const getMovieById = async ({movieId = ''}) => {
  console.log(`${BASE_URL}&i=${movieId}`);
  const response = await axios.get(`${BASE_URL}&i=${movieId}`);
  const getResult = toCamelCaseProps([response.data]);
  return getResult[0];
};

export {getMovies, getMovieById};

const toCamelCaseProps = items => {
  return items.map(data =>
    Object.keys(data).reduce((destination, key) => {
      if (key !== 'DVD') {
        const newKey = key.charAt(0).toLowerCase() + key.slice(1);
        if (data[key] && Object.keys(data[key]) > 0) {
          // If its a nested object, go inside an do that props camel case to
          destination[newKey] = toCamelCaseProps(data[key]);
        } else if (data[key] && Array.isArray(data[key])) {
          // If its an array, do the same to each item
          destination[newKey] = toCamelCaseProps(data[key]);
        } else {
          destination[newKey] = data[key];
        }
        return destination;
      } else {
        // If the field is ID, just let as ID
        destination[key] = data[key];
        return destination;
      }
    }, {}),
  );
};
