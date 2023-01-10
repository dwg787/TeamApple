import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

export default function MainCard({ item }) {
  const { navigate } = useNavigation();
  //   console.log('props.item', item);
  return (
    // <></>
    <TouchableOpacity
      onPress={() =>
        navigate('Detail', {
          params: { data: item },
        })
      }
    >
      <SingleCard>
        <AnimalCardPicture>
          <AnimalPic source={{ url: `${item.popfile}` }} />
        </AnimalCardPicture>
        <AnimalCardType>
          <TextC>성별</TextC>
          <TextC>품종</TextC>
          <TextC>나이</TextC>
          <TextC>지역</TextC>
          <TextC>등록일</TextC>
        </AnimalCardType>
        <AnimalCardDescription>
          <AnimalCardGender>{item.sexCd}</AnimalCardGender>
          <AnimalCardKind>{item.kindCd}</AnimalCardKind>
          <AnimalCardAge>{item.age}</AnimalCardAge>
          <AnimalCardLocation>{item.orgNm}</AnimalCardLocation>
          <AnimalCardDate>{item.happenDt}</AnimalCardDate>
        </AnimalCardDescription>
      </SingleCard>
    </TouchableOpacity>
  );
}

const AnimalPic = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 70%;
`;

const TextC = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
`;

const SingleCard = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 170px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 3px 2px;
`;

const AnimalCardPicture = styled.View`
  margin-left: 25px;
  width: 120px;
  height: 120px;
  border-radius: 70%;
  background-color: #b3b3b3;
`;

const AnimalCardType = styled.View`
  margin-left: 30px;
  font-size: 25px;
  font-weight: bold;
`;

const AnimalCardDescription = styled.View`
  margin-left: 20px;
  position: relative;
`;

const AnimalCardKind = styled.Text`
  margin-top: 9px;
  position: relative;
`;

const AnimalCardGender = styled.Text`
  margin-top: 9px;
  position: relative;
`;

const AnimalCardAge = styled.Text`
  margin-top: 8px;
  position: relative;
`;

const AnimalCardLocation = styled.Text`
  margin-top: 8px;
  position: relative;
`;

const AnimalCardDate = styled.Text`
  margin-top: 6px;
  position: relative;
`;
