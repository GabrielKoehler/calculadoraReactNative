import { Dimensions, StyleSheet } from 'react-native';
import { greaterThan } from 'react-native-reanimated';

const style = StyleSheet.create({
container :{
    flex: 1,
    backgroundColor: '#383a59',
    justifyContent: 'center',
    alignItems: 'center',
},
memory: {
    paddingBottom: 0,
    fontSize: Dimensions.get('window').height / 25,
    fontWeight: '700',
    color: '#e0554a',
},
memoryText: {
    paddingBottom:  Dimensions.get('window').height / 60,
    fontSize: Dimensions.get('window').height / 18,
    fontWeight: '700',
    color: '#fff',

}
})

export default style