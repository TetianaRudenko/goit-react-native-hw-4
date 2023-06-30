import { View, Text, StyleSheet , Pressable} from "react-native";
import PostsScreen from "./PostsScreen";
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SubmitBtn from "../Components/ButtonSubmit";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from '@expo/vector-icons';

function HomeScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
const HomeScreen = () => {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();
  
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Posts') {
              return (
                <View style={styled.footerBar}>

                <Feather
                  name="grid"
                  size={size}
                  style={focused? [styled.plusIcon]: [{color:"#212121CC"}]}
                  />
                <Pressable style={styled.plusIcon}>
          <AntDesign
            name="plus"
            size={24}
            color="rgba(255, 255, 255, 1)"
            style={{alignItems:"center"}}
          />
                  </Pressable>
                  <Feather
          name="user"
          size={24}
          color="#212121CC"
        />
                  </View>
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          //tabBarInactiveTintColor: 'gray',
          //tabBarActiveTintColor: 'tomato',
        })}
    >
       
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <SubmitBtn onPress={() => navigation.navigate('Login')} />,
          
      }}
      />
    
        </Tabs.Navigator>
  );

};

export default HomeScreen;
const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal:16,
  },
  user: {
    marginTop: 32,
    marginBottom: 32,
    flexDirection: 'row',
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  userDescription: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmail: {
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
  footerBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
  },
  plusIcon: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    width: 70,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    
  }
});