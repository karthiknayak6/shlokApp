import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from '@rneui/themed';
import {ListItem} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

function HomeScreen() {
  const navigation = useNavigation(); // Use useNavigation hook to access navigation

  const books = require('../data.json');

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        <Card
          containerStyle={{
            marginTop: 15,
            marginBottom: 15,
            marginHorizontal: 0,
            paddingTop: 10,
            paddingBottom: 0,
            backgroundColor: 'pink',
          }}>
          <Card.Title style={{fontSize: 20}}>Choose a book</Card.Title>
        </Card>
        {books.map(book => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log('Book is ' + book.title);
                navigation.navigate('Adhyayas', {book}); // Navigate to BookDetails screen
              }}
              key={book.id}>
              <LinearGradient
                colors={['orange', 'darkorange']} // Set gradient colors
                start={{x: 0, y: 0}} // Set gradient start position
                end={{x: 1, y: 0}} // Set gradient end position
                style={{
                  borderRadius: 12,
                  marginVertical: 4,
                  marginHorizontal: 8,
                }}>
                <ListItem
                  containerStyle={{
                    backgroundColor: 'transparent',
                    paddingHorizontal: 10,
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 20, color: 'white'}}>
                      {book.title}
                    </ListItem.Title>
                    <ListItem.Subtitle style={{color: 'white'}}>
                      {book.language}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
