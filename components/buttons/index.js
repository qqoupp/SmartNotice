import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const MyComponent = ({ label }) => (
  <View style={styles.container}>
    <Button
      mode="contained"
      onPress={() => console.log('Pressed')}
      style={styles.button}
    >
      {label}
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',   // Center horizontally
    justifyContent: 'center', // Optional: center vertically
    paddingTop: 20,         // Adjust spacing as needed
  },
  button: {
    width: '50%',
    backgroundColor: 'rgba(19, 6, 31, 0.5)',
    borderRadius: 8,
  },
});

export default MyComponent;
