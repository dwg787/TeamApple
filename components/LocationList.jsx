import React, { useState } from 'react';
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
  const [isClicked, setIsClicked] = useState(false);
  const { navigate } = useNavigation();

  console.log(isClicked);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  console.log('loc??', loc);

  return (
    <View>
      <SelectLocationBtn
        onPress={handleIsClicked}
        style={{ backgroundColor: isClicked ? '#f19936' : 'white' }}
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

const SelectLocationBtn = styled.TouchableOpacity`
  /* width: 100; */
  background-color: #f19936;
  padding: 10px 15px;
  border-radius: 5px;
  align-items: center;
`;

const LocationText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.upcomingText};
  color: black;
`;
