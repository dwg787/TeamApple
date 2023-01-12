import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Login from "../screens/Login";
import Detail from "../screens/Detail";
import Main from "../screens/Main";
import SignUp from "../screens/SignUp";
import Filter from "../screens/Filter";
import LoginSuccess from "../screens/LoginSuccess";
import SignUpSuccess from "../screens/SignUpSuccess";
import IntroSlider from "../screens/IntroSlider";
import { AntDesign } from "@expo/vector-icons";
import { ORANGE_COLOR, BLUE_COLOR, DARK_COLOR } from "../colors";
import { useNavigation } from "@react-navigation/native";
import { authService } from "../firebase";
import { signOut } from "firebase/auth";

const Stack = createNativeStackNavigator();

export default function Stacks() {
  const isDark = useColorScheme() === "dark";
  const { navigate } = useNavigation();
  const logout = () => {
    Alert.alert("로그아웃", "로그아웃 하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소 클릭!"),
      },
      {
        text: "로그아웃",
        style: "destructive",
        onPress: () => {
          signOut(authService);
          navigate("NotTabs", { screen: "Login" });
        },
      },
    ]);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: isDark ? ORANGE_COLOR : BLUE_COLOR,
        headerRight: () => {
          let button = !authService.currentUser ? (
            <TouchableOpacity onPress={() => navigate("Login")}>
              <AntDesign
                name="login"
                size={24}
                color={isDark ? ORANGE_COLOR : BLUE_COLOR}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={logout}>
              <AntDesign
                name="logout"
                size={24}
                color={isDark ? ORANGE_COLOR : BLUE_COLOR}
              />
            </TouchableOpacity>
          );

          return button;
        },
      }}
    >
      <Stack.Screen
        options={{
          title: "유기동물",
        }}
        name="Main"
        component={Main}
        style={{ backgroundColor: isDark ? "DARK_COLOR" : "white" }}
      />
      <Stack.Screen
        options={{
          title: "정보",
        }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}

export function NotTabs() {
  const isDark = useColorScheme() === "dark";

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: isDark ? ORANGE_COLOR : BLUE_COLOR,
      }}
    >
      <Stack.Screen
        name="IntroSlider"
        component={IntroSlider}
        options={{
          title: "IntroSlider",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "SignUp",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{
          title: "Filter",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginSuccess"
        component={LoginSuccess}
        options={{
          title: "LoginSuccess",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpSuccess"
        component={SignUpSuccess}
        options={{
          title: "SignUpSuccess",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
