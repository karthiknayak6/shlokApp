import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 0,
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: '#fc83a0',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  cardContainer: {
    borderRadius: 7,
    paddingVertical: 14,
    borderColor: 'white',
    borderWidth: 2,
    elevation: 3,
  },
  cardContainerPlaying: {
    borderRadius: 7,
    paddingVertical: 13,
    borderColor: '#ff7038',
    borderWidth: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verseText: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
  buttonContainer: {
    width: 150,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 0,
    marginTop: 20,
    marginBottom: 20,
  },
  viewMeaningButton: {
    backgroundColor: '#ff7038',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 0,
    paddingVertical: 4,
    marginTop: 6,
  },
  bookTO: {
    width: '50%',
    marginHorizontal: 0,
  },
  bookContainerView: {
    flexDirection: 'row',
    marginHorizontal: 0,
  },
  bookCard: {
    backgroundColor: 'white',
    borderRadius: 7,
    marginHorizontal: 10,
    elevation: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 10,
    marginBottom: 20,
  },
  bookThumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bookText: {
    color: '#ff7038',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
export default styles;
