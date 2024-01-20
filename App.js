// App.js
import React,{useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StatusBar } from 'react-native';
import LoginForm from './views/LoginForm';
import HomeScreen from './views/HomeScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('./assets/Poppins/Poppins-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" 
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
