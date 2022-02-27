import React,{useState} from 'react';
import {Text, View} from 'react-native';
import {Card} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {useNavigation} from '@react-navigation/native';

const cardStyle = {
  borderRadius: 8, 
  marginHorizontal: 8,
  marginBottom: 8,  
  backgroundColor: "gray"
};

const textStyle = {
  marginHorizontal: 20,
  alignItems: 'center',
  fontSize : 20,
  color: '#000000',
  textAlign: 'center',
  fontWeight: '600',
  fontSize: 18,
  margin: 8,
};

const Favorite = props => {
  const {movie, withActions = true} = props;
  const navigator = useNavigation();
 
  return (
    <Card
      style={cardStyle}
      onPress={() => navigator.navigate('Details', {id: movie.imdbID})}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text
          style={textStyle}>
          {movie.title}
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{margin: 'auto'}}
          width={250} // height will be calculated automatically
          source={{uri: movie.poster}}
        />
      </View>
    </Card>
  );
};

export default Favorite;
