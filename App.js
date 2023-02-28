import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from './src/custom/CustomTextInput';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <CustomTextInput />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
  },
});
