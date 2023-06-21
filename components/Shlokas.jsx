import React, {useState, useRef} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {
  useNavigation,
  useRoute,
  useScrollToTop,
} from '@react-navigation/native';
import {ListItem, Button, Card} from '@rneui/themed';
import SingleVerse from './SingleVerse';
import styles from '../styles/basic';
import Tts from 'react-native-tts';
import {useEffect} from 'react';

const Shlokas = () => {
  const ref = useRef(null);
  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollTo({y: 0, animated: true});
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', scrollToTop);
    return unsubscribe;
  }, [navigation, scrollToTop]);
  const navigation = useNavigation();
  const route = useRoute();
  const {book, id, title} = route.params;
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

  const onPressTouch = () => {
    // Do something on touch
  };

  return (
    <View style={{backgroundColor: '#fcf6f0', flex: 1}}>
      <ScrollView style={{height: '90%'}} ref={ref}>
        <Card containerStyle={styles.title}>
          <Card.Title style={{fontSize: 20}}>
            {book.adhyayas[id].title}
          </Card.Title>
        </Card>
        <View>
          {book.adhyayas[id].verses.map(verse => (
            <SingleVerse
              key={verse.id}
              verse={verse}
              verses={book.adhyayas[id].verses}
              isPlaying={verse.id === playingId}
              onPlayClick={handlePlayClick}
              playingId={playingId}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => {
            Tts.stop();
            navigation.navigate('Shlokas', {
              book,
              id: id === 0 ? id : id - 1,
            });
            setPlayingId(null);
            if (id === book.adhyayas.length - 1) {
              handleEnd();
            }
            scrollToTop();
          }}
          title="Prev"
          containerStyle={styles.buttonContainer}
          buttonStyle={{backgroundColor: '#ff7038'}}
          titleStyle={{
            color: 'white',
            marginHorizontal: 20,
          }}
        />
        <Button
          onPress={() => {
            Tts.stop();
            navigation.navigate('Shlokas', {
              book,
              id: id === book.adhyayas.length - 1 ? id : id + 1,
            });
            setPlayingId(null);
            if (id === book.adhyayas.length - 1) {
              handleEnd();
            }
            scrollToTop();
          }}
          title="Next"
          containerStyle={styles.buttonContainer}
          buttonStyle={{backgroundColor: '#ff7038'}}
          titleStyle={{
            color: 'white',
            marginHorizontal: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Shlokas;
