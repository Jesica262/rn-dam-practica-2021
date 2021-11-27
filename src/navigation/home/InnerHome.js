import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const InnerHome = () => {
  const navigation = useNavigation();
  return (
    <Layout level="2">
      <Text>Soy el componente InnerHome, estoy dentro del componente Home</Text>

      <Button onPress={() => navigation.navigate('Inner Home 2')}>
        Ir a otro componente Ir a Inner 2
      </Button>
    </Layout>
  );
};

const InnerHomeTwo = () => {
  const navigation = useNavigation();

  return (
    <Layout level="2">
      <Text>
        Soy el componente InnerHome 2, estoy dentro del componente Home
      </Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        Ir a perfil
      </Button>
    </Layout>
  );
};

export {InnerHome, InnerHomeTwo};
