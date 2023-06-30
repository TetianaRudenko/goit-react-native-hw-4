
import 'react-native-gesture-handler';
//import { StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';

//SplashScreen.preventAutoHideAsync();
//npx expo install react-native-gesture-handler@~2.9.0
//npm install @react-navigation/bottom-tabs
const MainStack = createStackNavigator();

const App = () => {
  useFonts({
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
  });

  return (
    <NavigationContainer> 
      <MainStack.Navigator
        initialRouteName="Home"> 

        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false}} 
        />
      </MainStack.Navigator>

      <StatusBar style="auto"/>
    </NavigationContainer>
  );
};

//const styled = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'flex-end',
//    //backgroundColor: '#fff',
//  },
//});

export default App;
