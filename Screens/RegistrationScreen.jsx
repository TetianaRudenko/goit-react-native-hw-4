import { StatusBar } from 'expo-status-bar';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import imageBg from "../assets/img/imageBg.png";
import RegistrationForm from "../Components/RegistrationForm";

const RegistrationScreen = () => {
  
  return ( 
    <KeyboardAvoidingView
      style={styled.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={styled.image}
        >

          <RegistrationForm />

          <StatusBar style="auto" />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
       
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});


export default RegistrationScreen; 



