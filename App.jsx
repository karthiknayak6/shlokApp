import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native';
// Import your screen components
import HomeScreen from './components/HomeScreen';
import Shlokas from './components/Shlokas';
import AdhyayaList from './components/AdhyayaList';

// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerStyle: {backgroundColor: '#ff7038'},
                headerShadowVisible: false,
                headerTitle: 'Shlok',
              }}
            />
            <Stack.Screen
              name="Adhyayas"
              component={AdhyayaList}
              options={{headerStyle: {backgroundColor: '#ff7038'}}}
            />
            <Stack.Screen
              name="Shlokas"
              component={Shlokas}
              options={{headerStyle: {backgroundColor: '#ff7038'}}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
