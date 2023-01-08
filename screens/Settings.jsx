import { View, Text } from "react-native";

export default function Settings({navigation}) {
  return (
    <View>
      <Text onPress ={()=> navigation.navigate('Settings')}>Settings</Text>
    </View>
  );
}
