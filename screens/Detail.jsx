import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  FlatList,
} from "react-native";
import styled from "@emotion/native";
import { Modal } from "react-native";
import { useState, useEffect } from "react";
import Details from "../components/Han/Details";
import ReviewModal from "./ReviewModal";
import ReviewCard from "../components/ReviewCard";
import { Alert } from "react-native";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { authService, dbService } from "../firebase";

export default function Detail({
  navigation: { navigate },
  route: {
    params: { params },
  },
}) {
  console.log("params.data:", params.data);

  const isDark = useColorScheme() === "dark";

  const [reviews, setReviews] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [change, setChange] = useState("");
  const [addContent, setAddcontent] = useState("");

  // console.log("isEdit!!!!!:", isEdit);

  // 문의 사항 버튼 클릭시 modal true 함수
  const handleAdding = async () => {
    const isLogin = !!authService.currentUser;
    if (!isLogin) {
      navigate("Login");
      return;
    }
    setIsOpenModal(true);
  };

  // 1. 문의 추가 (add)
  // const newReview = {
  //   // id: Date.now(),
  //   contents: addContent,
  //   createdAt: Date.now(),
  //   userId: authService.currentUser?.uid,
  //   nickname: authService.currentUser?.displayName,
  //   cardID: params.data?.desertionNo,
  // };

  const addReview = async () => {
    await addDoc(collection(dbService, "reviews"), {
      contents: addContent,
      createdAt: Date.now(),
      userId: authService.currentUser?.uid,
      nickname: authService.currentUser?.displayName,
      cardID: params.data?.desertionNo,
    });
    setAddcontent("");
    setIsOpenModal(false);
  };

  useEffect(() => {
    const q = query(
      collection(dbService, "reviews"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newReviews = snapshot.docs.map((dco) => ({
        id: doc.id,
        ...dco.date(),
      }));
      setReviews(newReviews);
    });
    return unsubscribe;
  }, []);
  // console.log("reviews!!!!!", reviews);

  // // 2. 문의 삭제 (delete)
  // const deleteReview = (id, userId) => {
  //   Alert.alert("문의 사항 삭제", "정말 삭제하시겠습니까?", [
  //     {
  //       text: "취소",
  //       style: "cancel",
  //       onPress: () => console.log("취소 클릭!"),
  //     },
  //     {
  //       text: "삭제",
  //       style: "destructive",
  //       onPress: async () => {
  //         // setReviews(newReviews);
  //         // const newReviews = reviews.filter((review) => review.id !== userId);
  //         if (userId === authService.currentUser.uid) {
  //           await deleteDoc(doc(dbService, "reviews", id));
  //         }
  //       },
  //     },
  //   ]);
  // };

  return (
    <FlatList
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
            renderItem={({ item }) => {
              if (params.data.desertionNo === item.cardID) {
                return (
                  <ReviewCard
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    review={item}
                    reviews={reviews}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    setReviews={setReviews}
                    change={change}
                    setChange={setChange}
                    data={params.data}
                    addReview={addReview}
                  />
                );
              }
            }}
            keyExtractor={(item) => item.id}
          />

          {/*등록버튼 */}
          {/* <ReviewModal
            data={params.data}
            isOpenModal={isOpenModal}
            isEdit={isEdit}
            setIsOpenModal={setIsOpenModal}
            setReviews={setReviews}
            reviews={reviews}
            id={change}
            addContent={addContent}
            setAddcontent={setAddcontent}
            addReview={addReview}
          /> */}
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
