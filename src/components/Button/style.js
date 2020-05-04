import { Dimensions, StyleSheet, } from "react-native";

const style = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width /5,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        borderWidth: 1,
        color: '#fff',
        borderColor: '#fff',    
        backgroundColor: '#e0554a',
        paddingBottom: 4,
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#383a59' ,
        paddingBottom: 4
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2,
        paddingBottom: 4,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3, 
        paddingBottom: 4,
    },
    displayButton:{
        color: '#fff',
        backgroundColor: '#383a59' ,
        paddingBottom: 4
    },
    advancedButton:{
        color: '#fff',
        backgroundColor: '#383a59' ,
        paddingBottom: 4
    }

})

export default style