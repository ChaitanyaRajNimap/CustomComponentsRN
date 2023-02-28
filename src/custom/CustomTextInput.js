import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const CustomTextInput = () => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Text style={[styles.label, isFocused && styles.labelFocus]}>
          Enter your text
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: '#000',
    borderWidth: 1,
    // backgroundColor: '#666',
    padding: 10,
    paddingTop: 20,
  },
  inputContainer: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
  input: {
    paddingVertical: 5,
    fontSize: 16,
    flex: 1,
  },
  label: {
    position: 'absolute',
    left: 0,
    top: 10,
    fontSize: 16,
    color: '#666',
  },
  labelFocus: {
    top: -10,
    fontSize: 12,
    color: '#bbb',
  },
});

export default CustomTextInput;
