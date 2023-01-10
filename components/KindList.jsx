import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from '@emotion/native';

export const KindList = ({ kind, onPress, isSelectedKind }) => {
  // const [isClicked, setIsClicked] = useState(false);

  // console.log(isClicked);

  // const handleIsClicked = () => {
  //   setIsClicked(!isClicked);
  // };

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={isSelectedKind ? styles.kindBtnSelected : styles.kindBtn}
        // disabled={isSelected ? false : true}
      >
        <View>
          <KindText>{kind}</KindText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  kindBtnSelected: {
    backgroundColor: '#f19936',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  kindBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

// const KindBtnSelected = styled.TouchableOpacity`
//   /* width: 100; */
//   background-color: '#f19936';
//   padding: 10px 15px;
//   border-radius: 5px;
//   align-items: center;
// `;

// const KindBtn = styled.TouchableOpacity`
//   /* width: 100; */

//   background-color: white;
//   padding: 10px 15px;
//   border-radius: 5px;
//   align-items: center;
// `;

const KindText = styled.Text`
  font-size: 20px;
  /* color: ${(props) => props.theme.upcomingText}; */
  color: black;
`;
