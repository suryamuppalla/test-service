import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from '@/components/Themed';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from "expo-router"; // Import FontAwesome icons from expo

export default function TabOneScreen() {

  const navigation = useNavigation();

  const navigateTo = (link: string) => {
    console.log(`Navigating to ${link}`, link); // Replace with actual navigation logic
    // @ts-ignore
    navigation.navigate(link);
  };

  return (
    <View style={styles.container}>

      <View style={styles.cardContainer}>
        {/* Card 1: Generic Chat */}
        <TouchableOpacity style={styles.card} onPress={() => navigateTo('generic-chat')}>
          <FontAwesome name="comments" size={40} color="black"/>
          <Text style={styles.cardText}>Generic Chat</Text>
        </TouchableOpacity>

        {/* Card 2 */}
        <View style={styles.card}>
          <FontAwesome name="user" size={40} color="black"/>
          <Text style={styles.cardText}>Profile</Text>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <FontAwesome name="bell" size={40} color="black"/>
          <Text style={styles.cardText}>Notifications</Text>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <FontAwesome name="cog" size={40} color="black"/>
          <Text style={styles.cardText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Keeps content aligned to the top
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: '42%', // Adjusts to control card width relative to the container
    height: 150, // Increased card height to fit icon and text comfortably
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10, // Space between icon and text
  },
});
