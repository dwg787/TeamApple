import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from '@emotion/native';

export const KindList = ({ kind }) => {
  const [isClicked, setIsClicked] = useState(false);

  console.log(isClicked);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <View>
      <SelectKindBtn
        onPress={handleIsClicked}
        style={{ backgroundColor: isClicked ? '#f19936' : 'white' }}
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
  /* background-color: ${(props) => (props ? '#f19936' : 'white')}; */
  padding: 10px 15px;
  border-radius: 5px;
  align-items: center;
`;

const KindText = styled.Text`
  font-size: 20px;
  /* color: ${(props) => props.theme.upcomingText}; */
  color: black;
`;
