import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ParlamentScreen from "./src/screens/ParlamentScreen";
import ParlamentMap from "./src/maps/ParlamentMap";
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
          <Stack.Screen name="Parlament" component={ParlamentScreen} />
          <Stack.Screen name="Parlament Map" component={ParlamentMap} />
          <Stack.Screen name="Buda Castle" component={BudaCastleScreen} />
          <Stack.Screen name="Buda Castle Map" component={BudaCastleMap} />
          <Stack.Screen name="Vajdahunyad Castle" component={VajdahunyadCastleScreen} />
          <Stack.Screen name="Vajdahunyad Castle Map" component={VajdahunyadCastleMap} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
