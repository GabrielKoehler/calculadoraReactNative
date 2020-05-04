import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#383a59'
  },
  textContainer: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 20,
  },
  initialText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width / 23,
    alignContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1.3,
    alignItems: 'center', 
  },
  logoProperties: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height  / 3,
  },
  gotoContainer: {
    flex: 1.3,
    alignItems: 'center',
    fontSize: 20
  },
  gotoText: {
    color: '#fff',
    paddingBottom: Dimensions.get('window').height  / 60,
    fontWeight: "700",
    fontSize: 28,
  },
  gotoButton: {
    width: Dimensions.get('window').width / 2,
    margin: Dimensions.get('window').width / 35,
  }


})

export default style