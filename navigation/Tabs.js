import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import { useColorScheme } from "react-native";
import { DARK_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
      }}
      sceneContainerStyle={{ backgroundColor: DARK_COLOR }}
    >
      <Tab.Screen
        options={{
          title: "Main",
          tabBarLabel: "Main",
        }}
        name='Main'
        component={Main}
      />
    </Tab.Navigator>
  );
}
