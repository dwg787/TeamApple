import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import Login from "../screens/Login";
import Details from "../components/Han/Details";

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
