import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Login from "../screens/Login";
import Detail from "../screens/Detail";
import Main from "../screens/Main";
import { AntDesign } from "@expo/vector-icons";
import { ORANGE_COLOR, BLUE_COLOR } from "../colors";

const Stack = createNativeStackNavigator();

export default function Stacks({ navigation: { goBack } }) {
  const isDark = useColorScheme() === "dark";
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name='left' size={24} color='black' />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        options={{
          title: "유기동물",
        }}
        name='Main'
        component={Main}
      />
      <Stack.Screen
        options={{
          title: "정보",
        }}
        name='Detail'
        component={Detail}
      />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}
