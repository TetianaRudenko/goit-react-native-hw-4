import { StyleSheet, Text, View, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const CreatePostsScreen = () => {
  return (
    <View style={styled.container}>
    <View > 
          <Image style={styled.postPhoto} />
          <Pressable style={styled.cameraIcon} > 
            <Entypo
              name="camera"
              size={24}
              color="#BDBDBD"
              alignSelf="center"
              />
          </Pressable>
          <Text style={[styled.postName, styled.typography]}> Завантажте фото </Text>
          
        </View>

        <Text style={[styled.postName, styled.typography]}  >Назва...</Text>

        <View style={styled.postWrapper}>
          <View style={styled.comment}>           
            
            <Text>Comment</Text>
          </View>
          <View style={[styled.location, {alignItems:"center"}]}>
            <EvilIcons name="location" size={24} color="#BDBDBD" />
            <Text style={[styled.postName, styled.typography]}>Місцевість</Text>
          </View>
        </View>
      </View>
 );
};
const styled = StyleSheet.create({
  cameraIcon: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    justifyContent:"center",
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor:"#ffffff",
  },
  postPhotoWrap: {
    position: "absolute",
    //top: -160,
    
  },
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
    // fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmail: {
    // fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
  post: {
    marginBottom: 32,
  },
  typography: {
    fontSize: 16,
    color:"#BDBDBD",
  },
  postName: {
    marginBottom: 8,
    marginTop: 8,
  },
  postWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  comment: {
    flexDirection: 'row',
  },
  location: {
    flexDirection: 'row',
  },
});

export default CreatePostsScreen;