import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#383a59'
  },
  textContainer: {
    flex: 0.6,
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 20,
    justifyContent: 'space-evenly',
  },
  boldText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width / 15,
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
  },
  logoContainer: {
    flex: 1.3,
    alignItems: 'center',
  },
  logoProperties: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height  / 3,
  },
  bottomContainer: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: 20
  },
  simpleText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: Dimensions.get('window').width / 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  maleName: {
    color: '#e0554a',
    fontWeight: '700',
    fontSize: Dimensions.get('window').width / 18,
    alignContent: 'center',
    alignItems: 'center',
  },
  femaleName:{
    color: '#e0554a',
    fontWeight: '700',
    fontSize: Dimensions.get('window').width / 18,
    alignContent: 'center',
    alignItems: 'center',
  }
})

export default style