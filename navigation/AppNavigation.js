//SYSTEM IMPORTS
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//USER IMPORTS
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen 1" component={Screen1} />
      <Tab.Screen name="Screen 2" component={Screen2} />
    </Tab.Navigator>
  );
};

// const Stack = createStackNavigator();

// const StackNav = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Screen 1" component={Screen1} />
//       <Stack.Screen name="Screen 2" component={Screen2} />
//     </Stack.Navigator>
//   );
// };

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StackNav /> */}
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default AppNavigator;
