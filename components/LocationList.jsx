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

export default function LocationList({ loc, onPress, isSelectedLocation }) {
  const { navigate } = useNavigation();

  // 중복 선택을 위한 코드
  // const [isClicked, setIsClicked] = useState(false);
  // const handleIsClicked = () => {
  //   setIsClicked(!isClicked);
  // };

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={
          isSelectedLocation ? styles.locationBtnSelected : styles.locationBtn
        }
      >
        <View>
          <LocationText>{loc}</LocationText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  locationBtnSelected: {
    backgroundColor: '#f19936',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  locationBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
// const SelectLocationBtn = styled.TouchableOpacity`
//   /* width: 100; */
//   background-color: #f19936;
//   padding: 10px 15px;
//   border-radius: 5px;
//   align-items: center;
// `;

const LocationText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.upcomingText};
  color: black;
`;
