import React from 'react';
// import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styled from '@emotion/native';

export default function LocationList({ loc }) {
  const { navigate } = useNavigation();
  console.log('loc??', loc);

  return (
    <View>
      <SelectLocationBtn
      // onPress={() =>

      // }
      >
        <View>
          <LocationText>{loc}</LocationText>
        </View>
      </SelectLocationBtn>
      {/* <ScrollView horizontal={true}>
      </ScrollView> */}
    </View>
  );
}

// 0C68F2
const SelectLocationBtn = styled.TouchableOpacity`
  /* width: 100; */
  background-color: #f19936;
  padding: 10px 15px;
  border-radius: 5px;
  align-items: center;
  /* border-color: ${(props) => props.theme.color.title}; */
`;

const LocationText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.upcomingText};
  color: white;
`;
