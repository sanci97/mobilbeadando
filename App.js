import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ParliamentScreen from "./src/screens/ParliamentScreen";
import ParliamentMap from "./src/maps/ParliamentMap";
import BudaCastleScreen from "./src/screens/BudaCastleScreen";
import BudaCastleMap from "./src/maps/BudaCastleMap";
import VajdahunyadCastleScreen from "./src/screens/VajdahunyadCastleScreen";
import VajdahunyadCastleMap from "./src/maps/VajdahunyadCastleMap";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Parliament" component={ParliamentScreen} />
          <Stack.Screen name="Parliament Map" component={ParliamentMap} />
          <Stack.Screen name="Buda Castle" component={BudaCastleScreen} />
          <Stack.Screen name="Buda Castle Map" component={BudaCastleMap} />
          <Stack.Screen name="Vajdahunyad Castle" component={VajdahunyadCastleScreen} />
          <Stack.Screen name="Vajdahunyad Castle Map" component={VajdahunyadCastleMap} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
