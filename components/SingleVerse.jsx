import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import styles from '../styles/basic';
import Tts from 'react-native-tts';
import ViewMeaning from './ViewMeaning';
import {Text, View, Pressable, Platform} from 'react-native';
import {Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const SingleVerse = ({verse, verses, isPlaying, onPlayClick}) => {
  const [showMeaning, setShowMeaning] = React.useState(false);

  const handlePlayClick = () => {
    if (isPlaying) {
      console.log(isPlaying, 'Isplaying');
      Tts.stop();
      onPlayClick(verse.id);
      return;
    }
    onPlayClick(verse.id);
    try {
      Tts.speak(verse.meaning, {
        onEnd: () => {
          onPlayClick(null); // Call onPlayClick(null) after TTS audio completion
        },
      });
    } catch (e) {
      Tts.requestInstallData();
    }
  };

  const handleViewMeaningClick = () => {
    setShowMeaning(!showMeaning);
  };

  useEffect(() => {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('kn-IN');
      const kannadaVoice = {
        id: 'kn-in-x-knf-local',
        language: 'kn-IN',
        latency: 200,
        name: 'kn-in-x-knf-local',
        networkConnectionRequired: false,
        notInstalled: true,
        quality: 400,
      };

      if (!kannadaVoice.notInstalled) {
        Tts.requestInstallData(); // Install the voice data
      }

      if (kannadaVoice.notInstalled) {
        console.log(
          'NOT INSTALLED NOT INSTALLED NOT INSTALLED NOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLED NOT INSTALLED NOT INSTALLED NOT INSTALLEDNOT INSTALLED NOT INSTALLEDNOT INSTALLED NOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLEDNOT INSTALLED NOT INSTALLED NOT INSTALLED NOT INSTALLED NOT INSTALLED NOT INSTALLED',
        );
      }

      if (Platform.OS === 'android') {
        Tts.setDefaultRate(0.5);
        Tts.setDefaultPitch(1.0);
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
