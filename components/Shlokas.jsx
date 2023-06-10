import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {ListItem, Button} from '@rneui/themed';
import SingleVerse from './SingleVerse';
import {useState} from 'react';
const Shlokas = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {book, id} = route.params;
  const [playingId, setPlayingId] = useState(null);

  const handleEnd = () => {
    console.log('End');
  };

  const handlePlayClick = verseId => {
    if (verseId === playingId) {
      setPlayingId(null);
    } else {
      setPlayingId(verseId);
    }
  };

  return (
    <ScrollView>
      <View>
        <View>
          {book.adhyayas[id].verses.map(verse => {
            return (
              <SingleVerse
                key={verse.id}
                verse={verse}
                verses={book.adhyayas[id].verses}
                isPlaying={verse.id === playingId}
                onPlayClick={handlePlayClick}
                playingId={playingId}
              />
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => {
            navigation.navigate('Shlokas', {
              book,
              id: id === 0 ? 0 : id - 1,
            });
            setPlayingId(null);
          }}
          title="Prev"
          buttonStyle={{
            borderColor: '#bf6f00',
            paddingHorizontal: 0,
          }}
          type="outline"
          titleStyle={{color: '#bf6f00', fontSize: 15}}
          containerStyle={{
            width: 150,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        />
        <Button
          onPress={() => {
            navigation.navigate('Shlokas', {
              book,
              id: id === book.adhyayas.length - 1 ? id : id + 1,
            });
            setPlayingId(null);
            if (id === book.adhyayas.length - 1) {
              handleEnd();
            }
          }}
          title="Next"
          buttonStyle={{
            borderColor: '#bf6f00',
            paddingHorizontal: 0,
          }}
          type="outline"
          titleStyle={{color: '#bf6f00', fontSize: 15}}
          containerStyle={{
            width: 150,
            marginHorizontal: 10,
            marginVertical: 10,
            paddingHorizontal: 0,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Shlokas;
