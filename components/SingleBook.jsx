import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Card} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/basic';
const SingleBook = ({book}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bookContainerView}>
      <Pressable
        style={styles.bookTO}
        onPress={() => {
          navigation.navigate('Adhyayas', {book});
        }}>
        <Card containerStyle={styles.bookCard}>
          <View style={{borderRadius: 7, overflow: 'hidden'}}>
            <Image
              style={styles.bookThumbnail}
              source={require(`../assets/images/bookthumb.webp`)}
            />
          </View>
          <Text style={styles.bookText}>{book.title}</Text>
        </Card>
      </Pressable>
    </View>
  );
};
export default SingleBook;
