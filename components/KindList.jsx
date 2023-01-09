import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from '@emotion/native';

export const KindList = ({ kind }) => {
  //   const [isPressed, setIsPressed] = useState(false);

  return (
    <View>
      <SelectKindBtn
      // onPress={setIsPressed(!isPressed)}
      >
        <View>
          <KindText>{kind}</KindText>
        </View>
      </SelectKindBtn>
    </View>
  );
};

const SelectKindBtn = styled.TouchableOpacity`
  /* width: 100; */
  background-color: #f19936;
  padding: 10px 15px;
  border-radius: 5px;
  align-items: center;
  /* border-color: ${(props) => props.theme.color.title}; */
`;

const KindText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.upcomingText};
  color: white;
`;
