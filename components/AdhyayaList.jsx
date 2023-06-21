import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {Card} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ListItem} from '@rneui/themed';
import styles from '../styles/basic';

function AdhyayaList() {
  const navigation = useNavigation();
  const route = useRoute();
  const {book} = route.params;

  const handleClick = (id, title) => {
    console.log('ID is ' + id);
    console.log('Adhyaya is ' + title);
    navigation.navigate('Shlokas', {book, id, title}); // Navigate to BookDetails screen
  };

  return (
    <ScrollView>
      <View>
        <Card containerStyle={styles.title}>
          <Card.Title style={{fontSize: 20}}>{book.title}</Card.Title>
        </Card>
        {book.adhyayas.map(adhyaya => {
          return (
            <TouchableOpacity
              onPress={() => handleClick(adhyaya.id, adhyaya.title)}
              key={adhyaya.id}>
              <LinearGradient
                colors={['#ff7038', '#ff7038']} // Set gradient colors
                start={{x: 0, y: 0}} // Set gradient start position
                end={{x: 1, y: 0}} // Set gradient end position
                style={{
                  borderRadius: 7,
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
                      {adhyaya.title}
                    </ListItem.Title>
                    {/* <ListItem.Subtitle style={{ color: "white" }}>
											{book.language}
										</ListItem.Subtitle> */}
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
export default AdhyayaList;
