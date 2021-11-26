import axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com/?apikey=f6de41f1';

/**
 * Metodo que nos permite buscar una lista de películas nombre
 * @param movieName
 * @param pageNumber
 * @returns {Promise<void>}
 */
const getMovies = async ({movieName, pageNumber = 1}) => {
  const response = await axios.get(
    `${BASE_URL}&s=${movieName}&type=movie&page=${pageNumber}&y=2020`,
  );
  const searchResult = toCamelCaseProps(response.data.Search);
  return searchResult;
};

/**
 * Metodo que nos permite buscar una película por su id
 * @param movieId
 * @returns {Promise<void>}
 */
const getMovieById = async ({movieId = ''}) => {
  const response = await axios.get(`${BASE_URL}&i=${movieId}&type=movie`);
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
