import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  FlatList,
} from "react-native";
import styled from "@emotion/native";
import { useState, useEffect } from "react";
import Details from "../components/Han/Details";
import ReviewModal from "./ReviewModal";
import ReviewCard from "../components/ReviewCard";
import { authService, dbService } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
} from "firebase/firestore";

export default function Detail({
  route: {
    params: { params },
  },
}) {
  console.log("params.data!!!@@@@", params.data);
  console.log("data!!!@@@", data);

  const isDark = useColorScheme() === "dark";

  const [reviews, setReviews] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // 문의 사항 버튼 클릭시 modal true 함수
  const handleAdding = () => {
    const isLogin = !!authService.currenUsers;
    if (!isLogin) {
      navigate("Login");
      return;
    }
    setIsOpenModal(true);
  };

  useEffect(() => {
    const q = query(
      collection(dbService, "reviews"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(newReviews);
    });
    return unsubscribe;
  }, []);

  console.log("params.data!!!@@@@", params.data);
  console.log("data!!!@@@", data);
  return (
    <FlatList
      style={{ paddingBottom: 30 }}
      data={reviews}
      renderItem={({ item }) => {
        <ReviewCard review={item} />;
      }}
      keyExtractor={(item) => item.id}
      ListFooterComponent={
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
          </ReviewContainer>
          <FlatList
            style={{ marginBottom: 50 }}
            data={reviews}
            renderItem={({ item }) => (
              <ReviewCard
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                review={item}
                deleteReview={deleteReview}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                reviews={reviews}
                setReviews={setReviews}
              />
            )}
            keyExtractor={(item) => item.id}
          />

          {/*등록버튼 */}
          <ReviewModal
            isOpenModal={isOpenModal}
            isEdit={isEdit}
            setIsOpenModal={setIsOpenModal}
            setReviews={setReviews}
            reviews={reviews}
          />
        </Container>
      }
    />
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
  margin: 10px;
  margin-bottom: 10px;
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
