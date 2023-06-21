import React from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {Card, Button} from '@rneui/themed';
import {ListItem} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/basic';
import SingleBook from './SingleBook';

function HomeScreen() {
  const books = require('../data1.json');

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        <Card containerStyle={styles.title}>
          <Card.Title style={{fontSize: 20}}>Choose a book</Card.Title>
        </Card>
        {books.map((book, index) => {
          return <SingleBook book={book} key={index} />;
        })}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
