import {Text} from '@rneui/base';
import {Card, Button} from '@rneui/themed';
import styles from '../styles/basic';
const ViewMeaning = ({verse}) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Text style={styles.verseText}>{verse.meaning}</Text>
    </Card>
  );
};
export default ViewMeaning;
