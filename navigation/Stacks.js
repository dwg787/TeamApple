import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Login from "../screens/Login";
import Detail from "../screens/Detail";
import { ORANGE_COLOR, BLUE_COLOR } from "../colors";

const Stack = createNativeStackNavigator();

export default function Stacks({ navigation: { goBack } }) {
  const isDark = useColorScheme() === "dark";
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlignment: "left",
        headerTintColor: isDark ? ORANGE_COLOR : BLUE_COLOR,
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: ORANGE_COLOR }}>뒤로</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}
