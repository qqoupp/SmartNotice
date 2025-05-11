import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextField from './components/textField';
import Button from './components/buttons'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.sectionTitle}>Smart Nottice</Text>
          <View style={styles.credentials}>
            <TextField label={"Email"} />
          </View>
          <View style={styles.credentials}>
            <TextField label={"Password"} secureTextEntry />
          </View>
          <Button label={"Sign In"}/>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777eb4',
    alignItems: "center",
    justifyContent: 'center',
  },

  contentWrapper: {
    paddingHorizontal: 20,
    width:'70%',
  },

  sectionTitle: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign:'center',

  },

  credentials: {
    paddingTop: 20,

  },
  
  

});
