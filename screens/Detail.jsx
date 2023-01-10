import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  FlatList,
} from 'react-native';
import styled from '@emotion/native';
import { Modal } from 'react-native';
import { useState } from 'react';
import Details from '../components/Han/Details';
import Review from './Review';
import { DARK_COLOR } from '../colors';
import ReviewCard from '../components/ReviewCard';

export default function Detail({ route: { params } }) {
  console.log(params.data);
  const isDark = useColorScheme() === 'dark';
  const [reviews, setReviews] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAdding = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Container style={{ backgroundColor: isDark ? DARK_COLOR : 'white' }}>
        <Details data={params.data} />
        <TitleWrapper
          style={{ borderBottomWidth: 1, borderBottomColor: '#D9D9D9' }}
        >
          <SectionTitle>문의</SectionTitle>
        </TitleWrapper>
        <ReviewContainer>
          <AddReview onPress={handleAdding}>
            <TempText>문의 사항 입력하기</TempText>
          </AddReview>
        </ReviewContainer>
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewCard review={item} />}
          keyExtractor={(item) => item.id}
        />
        <Review
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setReviews={setReviews}
        />
      </Container>
    </>
  );
}
const Container = styled.ScrollView`
  flex: 1;
`;
const TitleWrapper = styled.View`
  align-items: center;
`;

const SectionTitle = styled.Text`
  color: ${(props) => props.theme.text};
  align-items: center;
  font-weight: 700;
  font-size: 25px;
  margin: 20px;
  margin-bottom: 20px;
`;
const ReviewContainer = styled.View`
  padding: 20px;
`;
const AddReview = styled.TouchableOpacity`
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border-width: 2px;
  align-items: center;
  border-color: #0c68f2;
  border-bottom: 2px;
`;
const TempText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.text};
`;
