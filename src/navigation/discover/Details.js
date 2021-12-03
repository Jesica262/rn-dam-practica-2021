import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {getMovieById} from '../../services/movies';
import LottieView from 'lottie-react-native';
import animation from '../../assets/loadingDetailAnimation.json';
import MovieCard from '../../components/MovieCard';
import {useRoute} from '@react-navigation/native';

export const Details = props => {
  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const {
    params: {id},
  } = useRoute();

  const getMovie = async () => {
    const movie = await getMovieById({movieId: id || 'tt6016776'});
    console.log(movie);
    setMovie(movie);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [props]);

  return (
    <Layout style={{flex: 1, paddingTop: 16}} level="2">
      {loading && <LottieView source={animation} autoPlay loop />}
      {!loading && (
        <Layout>
          <MovieCard movie={movie} withActions={false} />
          <Text style={{margin: 16}}>{movie.plot}</Text>
        </Layout>
      )}
    </Layout>
  );
};
