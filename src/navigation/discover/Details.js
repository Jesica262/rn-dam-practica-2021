import React, {useEffect} from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import {getMovieById} from '../../services/movies';
import LottieView from 'lottie-react-native';
import animation from '../../assets/loadingDetailAnimation.json';
import MovieCard from '../../components/MovieCard';
export const Details = props => {
  const {id} = props;
  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const getMovie = async id => {
    const movie = await getMovieById({movieId: 'tt6016776' || id});
    console.log(movie);
    setMovie(movie);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
  };

  useEffect(() => {
    getMovie(id);
  }, [props, id]);

  return (
    <Layout style={{flex: 1, paddingTop: 16}} level="2">
      {loading && <LottieView source={animation} autoPlay loop />}
      {!loading && <MovieCard movie={movie} withActions={false} />}
    </Layout>
  );
};
