// HomeScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1'; 
import Screen2 from './Screen2'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Screen1') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Screen2') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          // You can return any component here that you like
          return <Icon name={iconName} size={size} color={focused ? '#158EFF' : 'gray'} />;
        },
        headerShown: false,
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
      
    </Tab.Navigator>
  );
};

export default HomeScreen;
