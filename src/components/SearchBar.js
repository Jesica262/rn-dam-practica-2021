import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input, Layout, Spinner} from '@ui-kitten/components';

const SearchBar = props => {
  const {searchValue, onSearchChange, onPressSearch, isLoading} = props;

  return (
    <Layout style={styles.searchContainer} level="2">
      <Input
        style={styles.input}
        placeholder="Enter a name"
        value={searchValue}
        onChangeText={onSearchChange}
      />
      {/*<Button*/}
      {/*  style={styles.button}*/}
      {/*  appearance="outline"*/}
      {/*  accessoryLeft={isLoading ? LoadingIndicator : null}*/}
      {/*  onPress={onPressSearch}>*/}
      {/*  {!isLoading && 'Search'}*/}
      {/*</Button>*/}
    </Layout>
  );
};

const LoadingIndicator = props => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="tiny" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchContainer: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    margin: 2,
  },
  input: {
    flex: 3,
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
