import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import imageBg from '../assets/img/imageBg.png';
import { StatusBar } from 'expo-status-bar';
import Avatar from '../Components/FormComponents/Avatar';
import ButtonLogOut from '../Components/ButtonLogout';
//import { LocationIcon, CommentOrangeIcon, LikeIcon } from '../../assets/SvgIcons';

const ProfileScreen = () => {  

  return (
    <View style={styled.container}>
      <ImageBackground source={imageBg} resizeMode="cover" style={styled.image}>
        
        <View style={styled.profile}>
          <Avatar />
          <ButtonLogOut /> 
          <Text style={styled.name}>Natali Romanova</Text>
          
          
          <View style={styled.post}>
            <Image style={styled.postPhoto} />
            <Text style={styled.postName}>Name</Text>
            <View style={styled.postWrapper}>
              
              <Text style={styled.comment}>Comment</Text>
              
              <Text style={styled.like}>Like</Text>
              <View style={styled.location}>
                
                <Text>Location</Text>
              </View>
            </View>
          </View>
        </View>
      <StatusBar style='auto'/>
      </ImageBackground>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 812,
    flex: 1,
    justifyContent: 'center',
  },
  profile: {
    marginTop: "auto",
    height:"80%",

    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: '80%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  name: {
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  post: {
    marginBottom: 32,
  },
  postName: {
    marginBottom: 8,
    marginTop: 8,
  },
  postWrapper: {
    flexDirection: 'row',
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
    marginRight: 24,
  },
  location: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
});

export default ProfileScreen;
