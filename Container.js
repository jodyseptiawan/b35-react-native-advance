import * as React from "react";

//Import Navigation Container = BrowserRoute
import { NavigationContainer } from "@react-navigation/native"; 

// Import Stack Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import FormNativeBase from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";

// Create Stack Navigation
const Stack = createStackNavigator();

export default function Container() {
  // Init Theme

  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary['300']
        }
      }}
      >
        <Stack.Screen 
          options={{
            title: 'Main'
          }} 
          name="Home" 
          component={Hello} 
        />
        <Stack.Screen name="IncDec" component={IncDec} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
