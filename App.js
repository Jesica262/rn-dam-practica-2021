/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Text} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TabNavigator} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({});

const App: () => Node = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

export default App;
