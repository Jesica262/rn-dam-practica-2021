import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input, Spinner} from '@ui-kitten/components';

const SearchBar = () => {
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.searchContainer}>
      <Input
        style={styles.input}
        placeholder="Enter a name"
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Button
        style={styles.button}
        appearance="outline"
        accessoryLeft={loading ? LoadingIndicator : null}
        onPress={() => setLoading(prevState => !prevState)}>
        {!loading && 'Search'}
      </Button>
    </View>
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
