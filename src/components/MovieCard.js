import React from 'react';
import {Text, StyleSheet, Dimensions, View} from 'react-native';
import {Card, Icon, Layout} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';

const MovieCard = props => {
  const {movie} = props;

  return (
    <Card style={{borderRadius: 8, marginHorizontal: 16, marginBottom: 16}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            margin: 8,
          }}>
          {movie.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 18,
            }}>
            {movie.imdbRating || (Math.random() * 10).toFixed(1)}
          </Text>
          <Icon
            style={{width: 24, height: 24}}
            fill="#8F9BB3"
            name="star-outline"
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{margin: 'auto'}}
          width={250} // height will be calculated automatically
          source={{uri: movie.poster}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={styles.icon} fill="#8F9BB3" name="heart" />
        <Icon style={styles.icon} fill="#8F9BB3" name="play-circle-outline" />
        <Icon
          style={styles.icon}
          fill="#8F9BB3"
          name="message-circle-outline"
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 8,
    marginTop: 8,
  },
});
export default MovieCard;
