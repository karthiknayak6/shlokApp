import React, {useEffect} from 'react';
import styles from '../styles/basic';
import Tts from 'react-native-tts';
import ViewMeaning from './ViewMeaning';
import {Text, View, Pressable} from 'react-native';
import {Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const SingleVerse = ({verse, verses, isPlaying, onPlayClick}) => {
  const [showMeaning, setShowMeaning] = React.useState(false);

  const handlePlayClick = () => {
    if (isPlaying) {
      console.log(isPlaying, 'Isplaying');
      Tts.stop();
      Tts.voices().then(voices => console.log(voices));
      onPlayClick(verse.id);
      return;
    }
    onPlayClick(verse.id);
    Tts.speak(verse.meaning, {
      onEnd: () => {
        onPlayClick(null); // Call onPlayClick(null) after TTS audio completion
      },
    });

    // Speak Malayalam text
  };
  const handleViewMeaningClick = () => {
    setShowMeaning(!showMeaning);
  };

  useEffect(() => {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('kn-IN');
      const malayalamVoice = {
        id: 'ml-in-x-mlf-local',
        language: 'ml-IN',
        latency: 200,
        name: 'ml-in-x-mlf-local',
        networkConnectionRequired: false,
        notInstalled: true,
        quality: 400,
      };

      // if (malayalamVoice.notInstalled) {
      //   Tts.requestInstallData(); // Install the voice data
      // }

      // Check and handle platform-specific TTS settings
      if (Platform.OS === 'android') {
        // Tts.setDefaultLanguage('en-US'); // Set the default language (optional)
        Tts.setDefaultRate(0.5); // Set the default speech rate (optional)
        Tts.setDefaultPitch(1.0); // Set the default pitch level (optional)
      }
    });
  }, []);

  const handlePauseClick = () => {
    Tts.stop();
    onPlayClick(null);
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
                  color="#ff7038"
                  onPress={handlePauseClick}
                />
              ) : (
                <Icon
                  name="play-circle"
                  size={30}
                  color="#ff7038"
                  onPress={handlePlayClick}
                />
              )}
            </Pressable>
          </View>
          <Button
            title={showMeaning ? 'Hide' : 'View meaning'}
            onPress={handleViewMeaningClick}
            buttonStyle={styles.viewMeaningButton}
            containerStyle={{
              width: 115,
              marginHorizontal: 0,
              marginTop: 10,
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 13}}
          />
          {showMeaning ? <ViewMeaning verse={verse} /> : null}
        </Card>
      </Pressable>
    </View>
  );
};

export default SingleVerse;
