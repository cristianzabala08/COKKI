import React, { Component } from 'react';
import {
   Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, ToastAndroid, Alert
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons'
  import bdImage from '../imagenes/fondos-3d.jpg'
  import Logo from '../imagenes/Logo.png'
  import {todos} from '../todos'
  import {Loginstyles} from './styles/LoginStyles'
  
  const { width: WIDTH } = Dimensions.get('window')
  
  export default class Login extends Component {
    //// creando mis variable y pasando la props
    constructor(props) {
      super(props);
      this.state = {
        show: true,
        dontshow: false,
        Username: '',
        password: '',
        todos
      }
  
    }
    // show our password
    show = () => {
      if (this.state.dontshow == false) {
        this.setState({ show: false, dontshow: true })
      } else {
        this.setState({ show: true, dontshow: false })
      }
    }
    //to get username
    handleUsername = (text) => {
      this.setState({ email: text })
   }
   //to get password
    handlePassword = (text) => {
      this.setState({ password: text })
   }
   //to check it out if your username and passwor is correct and go to list view
    login = (user, pass) => {
       return  this.state.todos.map((data,i ) =>{
         if (user == data.username && pass == data.password){
          this.props.navigation.navigate('Details')
         }else{
            Alert.alert('pass wrong')
         }
     })
   }

   //login view
    render() {
      return (
        <ImageBackground source={bdImage} style={Loginstyles.backgroundContainer}>
  
          <View style={Loginstyles.logoContainer}>
            <Image source={Logo} style={Loginstyles.logo} />
            <Text style={Loginstyles.logoText}>Aplicacion consulta</Text>
          </View>
  
          <View style={Loginstyles.inputDiseno}>
            <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'}
              style={Loginstyles.inputIcon}
            />
            <TextInput
              style={Loginstyles.inputUser}
              placeholder={'Username'}
              placeholderTextColor='rgba(255, 255, 255, 0.7)'
              underlineColorAndroid='transparent'
              onChangeText = {this.handleUsername}
              
            />
          </View>
  
          <View style={Loginstyles.inputDiseno}>
            <Icon name={'ios-key'} size={28} color={'rgba(255, 255, 255, 0.7)'}
              style={Loginstyles.inputIcon}
            />
            <TextInput
              style={Loginstyles.inputUser}
              placeholder={'Password'}
              secureTextEntry={this.state.show}
              placeholderTextColor='rgba(255, 255, 255, 0.7)'
              underlineColorAndroid='transparent'
              onChangeText = {this.handlePassword}
            />
  
            <TouchableOpacity style={Loginstyles.btnEye}
              onPress={this.show.bind(this)}>
              <Icon name={this.state.dontshow == false ? 'ios-eye' : 'ios-eye-off'}
                size={26} color={'rgba(255, 255, 255, 0.7)'}
              />
            </TouchableOpacity>
          </View>
  
          <TouchableOpacity style={Loginstyles.btnLogin}
          onPress = {
            () => this.login(this.state.email, this.state.password)}
          >
            <Text style={Loginstyles.textLogin}> Login</Text>
          </TouchableOpacity>
        </ImageBackground>
      );
    }
  
  
  }
  
 