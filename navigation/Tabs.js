import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Stacks from "./Stacks";
import Favorites from "../screens/Favorites";
import Settings from "../screens/Settings";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import { DARK_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation: { goBack } }) {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: "1px",
          borderTopColor: "E9E9E9",
          backgroundColor: "#F19936",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#222222",
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name='left' size={24} color='black' style={{ marginLeft: 16 }} />
          </TouchableOpacity>
        ),
      }}
      sceneContainerStyle={{ backgroundColor: DARK_COLOR }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => <Entypo name='github' size={size} />,
        }}
        name='Stacks'
        component={Stacks}
      />
      <Tab.Screen
        options={{
          title: "관심동물",
          tabBarLabel: "관심동물",
          tabBarIcon: ({ size }) => <Ionicons name='heart-outline' size={size} />,
        }}
        name='Favorites'
        component={Favorites}
      />
      <Tab.Screen
        options={{
          title: "설정",
          tabBarLabel: "설정",
          tabBarIcon: ({ size }) => <SimpleLineIcons name='settings' size={size} />,
        }}
        name='Settings'
        component={Settings}
      />
    </Tab.Navigator>
  );
}
