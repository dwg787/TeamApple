import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
      }}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        options={{
          title: "Main",
          tabBarLabel: "Main",
        }}
        name="Main"
        component={Main}
      />
    </Tab.Navigator>
  );
}
