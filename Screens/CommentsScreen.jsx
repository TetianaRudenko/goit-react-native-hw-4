import { StyleSheet,  View, Image } from 'react-native';


const CommentsScreen = () => {
  return (
    <View style={styled.container}>
      <Image style={styled.postPhoto} />
    </View>
  );
};


const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginTop: 32,
    marginBottom: 8,
    alignItems: 'center',
  },
});


export default CommentsScreen;