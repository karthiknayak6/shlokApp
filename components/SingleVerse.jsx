import React, {useEffect} from 'react';
import styles from '../styles/basic';
import Tts from 'react-native-tts';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const SingleVerse = ({verse, verses, isPlaying, onPlayClick}) => {
  const handlePlayClick = () => {
    if (isPlaying) {
      console.log(isPlaying, 'Isplaying');
      Tts.stop();
      Tts.voices().then(voices => console.log(voices));
      onPlayClick(verse.id);
      return;
    }
    onPlayClick(verse.id);
    Tts.speak(
      'എല്ലാവർക്കും നമസ്കാരം, ഇന്ന് സുഖമാണോ? നിങ്ങൾ നലയും ആരോഗ്യവും ആയിരിക്കട്ടെ',
    ); // Speak Malayalam text
  };

  useEffect(() => {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('ml-IN');
      const malayalamVoice = {
        id: 'ml-in-x-mlf-local',
        language: 'ml-IN',
        latency: 200,
        name: 'ml-in-x-mlf-local',
        networkConnectionRequired: false,
        notInstalled: true,
        quality: 400,
      };

      /*if (malayalamVoice.notInstalled) {
        Tts.requestInstallData(); // Install the voice data
      }*/

      // Check and handle platform-specific TTS settings
      if (Platform.OS === 'android') {
        // Tts.setDefaultLanguage('en-US'); // Set the default language (optional)
        Tts.setDefaultRate(0.5); // Set the default speech rate (optional)
        Tts.setDefaultPitch(1.0); // Set the default pitch level (optional)
      }
    });
  }, []);

  const handlePauseClick = () => {
    Tts.pause();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePlayClick}>
        <Card
          containerStyle={
            isPlaying ? styles.cardContainerPlaying : styles.cardContainer
          }>
          <View style={styles.cardContent}>
            <Text style={styles.verseText}>{verse.verse}</Text>
            <Pressable style={styles.iconContainer} onPress={handlePlayClick}>
              {isPlaying ? (
                <Icon
                  name="pause-circle"
                  size={30}
                  color="#ff9603"
                  onPress={handlePauseClick}
                />
              ) : (
                <Icon
                  name="play-circle"
                  size={30}
                  color="#ff9603"
                  onPress={handlePlayClick}
                />
              )}
            </Pressable>
          </View>
          <Button
            title="View meaning"
            buttonStyle={{
              backgroundColor: 'orange',
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 10,
              marginBottom: 0,
              paddingVertical: 4,
            }}
            containerStyle={{
              width: 115,
              marginHorizontal: 0,
              marginTop: 10,
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 13}}
          />
        </Card>
      </Pressable>
    </View>
  );
};

export default SingleVerse;
