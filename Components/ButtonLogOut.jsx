import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
const ButtonLogOut = ({ onPress }) => {
  return (
    <Pressable style={styled.accessibility } onPress={onPress}>
      <Feather
        name="log-out"
        size={24}
        color="#BDBDBD" />
    </Pressable>
    
  );
};
export default ButtonLogOut;
const styled = StyleSheet.create({
  accessibility: {
    width: 40,
    height: 40,
    
  }
})