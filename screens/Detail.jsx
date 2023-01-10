import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from "react-native";
import styled from "@emotion/native";
import { Modal } from "react-native";
import { useState } from "react";
import Details from "../components/Han/Details";
import Review from "./Review";
import { DARK_COLOR } from "../colors";

export default function Detail({ route: { params } }) {
  console.log(params.data);
  const isDark = useColorScheme() === "dark";
  const [reviews, setReviews] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(reviews);

  const handleAdding = () => {
    setIsOpenModal(true);
  };
  // const isDark = useColorScheme() === "dark";

  //1. UI만들기 (완성)
  //2. 문의 사항 입력하기 버튼 클릭 시 페이지 전환 쿠팡이츠처럼
  //3. map을 돌려서 버튼 클릭시 list에 뿌려지는거 만들기
  //4. 그 다음 flatlist로 만들기
  //5. swiper deledte 버튼 만들기
  return (
    <>
      <Container style={{ backgroundColor: isDark ? DARK_COLOR : "white" }}>
        <Details data={params.data} />
        <TitleWrapper
          style={{ borderBottomWidth: 1, borderBottomColor: "#D9D9D9" }}
        >
          <SectionTitle>문의</SectionTitle>
        </TitleWrapper>
        <ReviewContainer>
          <AddReview onPress={handleAdding}>
            <TempText>문의 사항 입력하기</TempText>
          </AddReview>
          <ScrollView>
            {reviews.map((review) => (
              <TouchableOpacity key={review.id}>
                <ReviewWrapper>
                  <ReviewId>{review.id}</ReviewId>
                  <ReviewContent>{review.contents}</ReviewContent>
                </ReviewWrapper>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ReviewContainer>
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
const ReviewWrapper = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border-width: 2px;
  align-items: center;
  border-color: #0c68f2;
  border-bottom: 2px;
`;
const ReviewId = styled.Text`
  font-size: 15px;
  font-weight: 700;
  margin-right: 50px;
  color: ${(props) => props.theme.text};
`;
const ReviewContent = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.text};
`;
