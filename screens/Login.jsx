import { View, Text } from "react-native";

export default function Login({navigation}) {
  return (
    <View>
      <Text onPress ={()=> navigation.navigate('Login')}>Login</Text>
    </View>
  );
}
