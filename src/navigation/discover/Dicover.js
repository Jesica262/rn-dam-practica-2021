import React, {useEffect} from 'react';
import SearchBar from '../../components/SearchBar';
import {Divider, Layout, Text} from '@ui-kitten/components';
import {getMovies} from '../../services/movies';
import {FlatList} from 'react-native';
import MovieCard from '../../components/MovieCard';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
};

const Discover = () => {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movieName, setMovieName] = React.useState('');
  const debouncedValue = useDebounce(movieName, 1000);

  useEffect(() => {
    searchResult();
  }, [debouncedValue]);

  const searchResult = async () => {
    if (movieName) {
      try {
        setIsLoading(true);
        const res = await getMovies({movieName});
        setIsLoading(false);
        setMovies(res);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    }
  };
  return (
    <Layout style={{flex: 1}} level="2">
      <SearchBar
        searchValue={movieName}
        onSearchChange={value => setMovieName(value)}
        onPressSearch={searchResult}
        isLoading={isLoading}
      />
      <Layout style={{padding: 8}} level="3">
        <FlatList
          data={movies}
          renderItem={({item}) => <MovieCard movie={item} />}
        />
      </Layout>
    </Layout>
  );
};

export default Discover;
