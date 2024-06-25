import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.footerText}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 36,
    backgroundColor: '#464646',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#e7e7e7',
  },
  footerText: {
    color: 'white',
  },
});

export default Header;
