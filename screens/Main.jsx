import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Main() {
  const { navigate } = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigate("Detail")}>
        <Text>Main</Text>
      </TouchableOpacity>
    </View>
  );
}
