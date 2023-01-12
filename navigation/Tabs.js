import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Stacks from "./Stacks";
import Favorites from "../screens/Favorites";
import Settings from "../screens/Settings";
import Login from "../screens/Login";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import { DARK_COLOR, BLUE_COLOR, ORANGE_COLOR } from "../colors";
import { authService } from "../firebase";
import { signOut } from "firebase/auth";

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation: { goBack, navigate } }) {
  const isDark = useColorScheme() === "dark";

  const logout = () => {
    signOut(authService)
      .then(() => {
        console.log("로그아웃 성공");
        navigate("NotTabs", { screen: "Login" });
      })
      .catch((err) => alert(err));
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#F19936",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#222222",
        headerTitleAlign: "center",
        headerTintColor: isDark ? ORANGE_COLOR : BLUE_COLOR,
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign
              name="left"
              size={24}
              style={{
                marginLeft: 16,
                color: isDark ? ORANGE_COLOR : BLUE_COLOR,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => {
          let button = !authService.currentUser ? (
            <TouchableOpacity onPress={() => navigate("Login")}>
              <AntDesign
                name="login"
                size={24}
                color={isDark ? ORANGE_COLOR : BLUE_COLOR}
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={logout}>
              <AntDesign
                name="logout"
                size={24}
                color={isDark ? ORANGE_COLOR : BLUE_COLOR}
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          );

          return button;
        },
      }}
      sceneContainerStyle={{ backgroundColor: isDark ? DARK_COLOR : "white" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "유기동물",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="paw-sharp" size={24} color={color} />
          ),
        }}
        name="Stacks"
        component={Stacks}
      />
      <Tab.Screen
        options={{
          title: "관심동물",
          tabBarLabel: "관심동물",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          title: "설정",
          tabBarLabel: "설정",
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="settings" size={size} color={color} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
