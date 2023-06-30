import { View, Text, StyleSheet , Pressable} from "react-native";
import PostsScreen from "./PostsScreen";
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SubmitBtn from "../Components/ButtonSubmit";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from '@expo/vector-icons';
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import ButtonLogOut from "../Components/ButtonLogout";
import BtnArrowLeft from "../Components/BtnArrowLeft";
import { Button } from "react-native";
import ProfileScreen from "./ProfileScreen";


const HomeScreen = () => {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();
  
  return ( 
    <Tabs.Navigator
      initialRouteName="PostsScreen"       
    >
      
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації", 
          tabBarShowLabel: false, 
          headerTitle: ()=> <Text style={{flex:1,marginLeft:"50%", paddingHorizontal:11, paddingTop:32,alignItems:"center" }}>Публікації</Text>,
          headerRight: () => <ButtonLogOut onPress={() => navigation.navigate("Login")} />,
          headerRightContainerStyle: {
            flex: 1,
            paddingRight: 10,     
          },
          tabBarIcon: () => {
            return (
              <Feather
                name="grid"
                size={24}
                color={"#212121CC"}   
                onPress={() => navigation.navigate('Posts')}
              />
            )
          }, 
        }}
      />

      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію", 
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BtnArrowLeft onPress={() => navigation.navigate("Posts")} />,
          headerLeftContainerStyle: {
            flex: 1,
            paddingLeft:16,
          },
          tabBarIcon: () => {
            return (
              
                   <AntDesign
                onPress={() => navigation.navigate('CreatePosts')}
                    name="plus"
                    size={24}
                style={[styled.focusedIcon, {
                  //alignSelf: "center", //justifyContent: "center",
                  //alignSelf: "center",
                  alignContent:"center",
                }]}
                  />
                  
                
            )
          },        
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профіль", 
          tabBarShowLabel: false,
         headerShown: false,
          tabBarIcon: () => {
            return (
               <Feather
                  name="user"
                  size={24}
                  color={"#212121CC"} 
                />
            )
          },        
        }}
      />
    
      </Tabs.Navigator>
       
  );

};

export default HomeScreen;
const styled = StyleSheet.create({
  footerBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 2,
  },
  defaultIcon: {
    width: 70,
    height: 40,
    borderRadius: 40,
    alignSelf: "center",
    color: "#212121CC",
    alignItems: "center",
  },
  focusedIcon: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    color: "#fff",
    width: 70,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
  }
});