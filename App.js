import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
      <StatusBar style='inverted' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 68,
  },
});
