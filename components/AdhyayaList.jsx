import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {Card} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ListItem} from '@rneui/themed';

function AdhyayaList() {
  const navigation = useNavigation();
  const route = useRoute();
  const {book} = route.params;

  const handleClick = id => {
    console.log('ID is ' + id);
    console.log('Adhyaya is ' + book.adhyayas[0].title);
    navigation.navigate('Shlokas', {book, id}); // Navigate to BookDetails screen
  };

  return (
    <ScrollView>
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
          <Card.Title style={{fontSize: 20}}>{book.title}</Card.Title>
        </Card>
        {book.adhyayas.map(adhyaya => {
          return (
            <TouchableOpacity
              onPress={() => handleClick(adhyaya.id)}
              key={adhyaya.id}>
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
