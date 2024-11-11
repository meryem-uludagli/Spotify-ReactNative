import {useRoute, useNavigation} from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SongInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {album} = route.params || {};
  const {coverArt, name, artist, year} = album;

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.paddingWiew}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.imageWiew}>
            <Image source={{uri: coverArt}} style={styles.coverImage} />
          </View>
        </View>

        <Text style={styles.albumNameText}>{name}</Text>

        <View style={styles.artistWiew}>
          <Text style={styles.artistText}>{artist}</Text>
        </View>

        <Pressable style={styles.controlView}>
          <Pressable style={styles.downloadButton}>
            <AntDesign name="arrowdown" size={24} color="white" />
          </Pressable>

          <View style={styles.playButtonView}>
            <MaterialCommunityIcons
              name="cross-bolnisi"
              size={24}
              color="white"
            />
          </View>
        </Pressable>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 50,
  },
  paddingWiew: {
    padding: 10,
  },
  coverImage: {
    width: 200,
    height: 200,
  },
  imageWiew: {flex: 1, alignItems: 'center'},
  albumNameText: {
    color: 'white',
    marginHorizontal: 12,
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  artistWiew: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  artistText: {color: '#909090', fontSize: 13, fontWeight: 'bold'},
  controlView: {},
  downloadButton: {},
  playButtonView: {},
});
