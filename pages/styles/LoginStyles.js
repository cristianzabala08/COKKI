import {StyleSheet,Dimensions} from 'react-native'
const { width: WIDTH } = Dimensions.get('window')

export const Loginstyles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 120,
      height: 120,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 50
    },
    logoText: {
      color: '#FF33BB',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      fontWeight: 'bold'
    },
    inputUser: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      fontSize: 20,
      paddingLeft: 45,
      backgroundColor: '#FF33BB',
      color: 'white',
      marginHorizontal: 25,
      borderColor: '#147ACF',
      borderWidth: 3,
      color: 'white'
  
    },
    inputIcon: {
      position: 'absolute',
      top: 10,
      left: 37
    },
    inputDiseno: {
      marginTop: 10
    },
    btnEye: {
      position: 'absolute',
      top: 10,
      right: 37
    },
    btnLogin: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      backgroundColor: '#147ACF',
      justifyContent: 'center',
      marginTop: 60
    },
    textLogin: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    }
  });