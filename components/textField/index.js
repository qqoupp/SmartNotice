import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const TextField = ({ label, ...props }) => {
  return (
    <TextInput
      label={label}
      style={styles.input}
      {...props}
      theme={{
        colors:{
            text:"white",
            placeholder:'white',
            primary:"white"
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',      // Make sure it fills the parent
    backgroundColor: 'rgba(21, 54, 100, 0.2)', // Optional for visibility
    borderRadius: 8,
  },
});

export default TextField;
