import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { NotTabs } from "./Stacks";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

export default function Root() {




  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Stacks" component={NotTabs} /> */}
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
