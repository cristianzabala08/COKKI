import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login'
import ListView from './pages/ListView'
import Buscar from './pages/buscar'

//parametro de mi vista Login
function HomeScreen({ navigation }) {
  return (
    <Login
      navigation={navigation}
    />
  );
}
//parametro de mi vista List View
function DetailsScreen({ navigation }) {
  return (<ListView
    navigation={navigation}
  />
  )
}
//parametro de mi vista buscar
function DetailsScreenSeach({ navigation,route }) {
  return (<Buscar
    navigation={navigation}
    route={route}
  />
  )
}


// creando la navegacion de la vista
const Stack = createStackNavigator();

function App({ navigation }) {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#147ACF',
          },
          headerTintColor: '#FF33BB',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="Details" component={DetailsScreen} options={{
          title: 'List View',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#147ACF',
          },
        }} />

        <Stack.Screen name="Seach" component={DetailsScreenSeach} options={{
          title: 'List Seach',
          headerStyle: {
            backgroundColor: '#147ACF',
          },
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
