import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { useFonts } from 'expo-font';

//SplashScreen.preventAutoHideAsync();

const App = () => {
  useFonts({
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
  });

  return (
    <View style={styles.container}>
 
      <RegistrationScreen />
      {/*  <LoginScreen /> */}
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    //backgroundColor: '#fff',
  },
});

export default App;
