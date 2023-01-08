import { View, Text } from "react-native";
//민성 수정 
import * as React from 'react';

export default function Detail({navigation}) {
  return (
    <View>
      <Text onPress ={()=> navigation.navigate('Detail')}>Detail</Text>
    </View>
  );
}
