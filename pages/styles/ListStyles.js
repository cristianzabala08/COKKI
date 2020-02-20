import {StyleSheet,Dimensions} from 'react-native'
const { width: WIDTH } = Dimensions.get('window')

export const ListStyles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#FF33BB',

    },
    List: {
        flex: 3,
        justifyContent: 'center',
        marginBottom: 3

    },
    Imagen: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ListTex: {
        fontSize: 20,
        color: '#FF33BB',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 15

    },
    ListTex1: {
        fontSize: 20,
        color: '#147ACF',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 15

    },
    isLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        right: 37
    },
      textLogin: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
      },
      btnLogin: {
        width: WIDTH - 300,
        height: 30,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: 2
    }

});