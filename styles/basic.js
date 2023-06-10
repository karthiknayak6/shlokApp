import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
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
    borderRadius: 10,
    paddingVertical: 14,
  },
  cardContainerPlaying: {
    borderRadius: 10,
    paddingVertical: 13,
    borderColor: 'orange',
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
  },
  iconContainer: {
    marginLeft: 10,
  },
});
export default styles;
