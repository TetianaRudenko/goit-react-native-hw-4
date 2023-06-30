import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import { Pressable } from 'react-native';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const PostsScreen = () => {
  return (
    <View style={styled.container}>

      <View style={styled.user}>
        <Image style={styled.userPhoto} />
        <View style={styled.userDescription}>
          <Text style={styled.userName}>Natali Romanova</Text>
          <Text style={styled.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View style={styled.footerBar}>
        <Feather
          name="grid"
          size={24}
          color="#212121CC" />
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
    </View>
  );
};


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
    color: "#fff",
    
  }
});

export default PostsScreen;