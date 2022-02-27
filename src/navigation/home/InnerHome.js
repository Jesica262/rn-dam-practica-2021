import React, {useContext} from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {StoreContext} from '../../store';
import {FlatList} from 'react-native';
import Favorite from '../../components/Favorite';

const textInputStyle = {
  marginLeft: 20,
  marginRight: 20,
  marginTop: 20,
  height: 30,
  color: '#000000',
  fontSize: 20, 
  marginBottom:10     
};

const InnerHome = () => {
  const navigation = useNavigation();
  const store = useContext(StoreContext);

  return (
    <Layout level="2">
      <Text style={textInputStyle}>
        Ir a la lista de Favoritos
      </Text>
      <Button onPress={() => navigation.navigate('Lista de Favoritos')}>
        Lista de Favoritos
      </Button>
      <Text style={textInputStyle}>
        Ir a lista de Ver mas Tarde
      </Text>
      <Button onPress={() => navigation.navigate('Ver mas Tarde')}>
        Ver mas Tarde
      </Button>
      <Text style={textInputStyle}>
        Ir al Perfil
      </Text>
      <Button onPress={() => navigation.navigate('Profile')}>
      Ir al Perfil
      </Button>
    </Layout>
  );
};

const listFavorites = () =>{
  const store = useContext(StoreContext);
  return(
    <Layout level="2">
      <FlatList
          data={store.favorites}
          renderItem={({item}) => <Favorite movie={item} />}
        />
    </Layout>
  );
}

const verMasTarde =()=>{
  const store = useContext(StoreContext);
  return(
    <Layout style={{flex: 1}} level="2">
    <Layout level="2">
        <FlatList
          data={store.toWatchList}
          renderItem={({item}) => <Favorite movie={item} />}
        />
    </Layout>
  </Layout>
  );
}

const InnerHomeTwo = () => {
  const navigation = useNavigation();

  return (
    <Layout level="2">
      <Text>
        Ir al Perfil
      </Text>
      <Button onPress={() => navigation.navigate('Ir al Perfil')}>
        Ir a perfil
      </Button>
    </Layout>
  );
};

export {InnerHome, InnerHomeTwo, listFavorites, verMasTarde};
