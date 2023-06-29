import { StatusBar } from 'expo-status-bar';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import imageBg from "../assets/img/imageBg.png";
import LoginForm from '../Components/LoginForm';

const LoginScreen = () => {
  
  return ( 
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={styles.image}
        >

          <LoginForm />

        </ImageBackground>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
  },
});


export default LoginScreen; 



