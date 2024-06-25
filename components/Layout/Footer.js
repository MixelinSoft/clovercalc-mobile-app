import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>MixelinSoft 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 18,
    backgroundColor: '#464646',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#e7e7e7',
  },
  footerText: {
    color: 'white',
  },
});

export default Footer;
