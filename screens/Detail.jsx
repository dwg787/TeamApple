import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  FlatList,
} from "react-native";
import styled from "@emotion/native";
import { useState, useEffect, useCallback} from "react";
import { Modal } from "react-native";
import Details from "../components/Han/Details";
import ReviewModal from "./ReviewModal";
import ReviewCard from "../components/ReviewCard";
import { authService, dbService } from "../firebase";
import { useNavigation } from "@react-navigation/native";


import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
} from "firebase/firestore";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { BLUE_COLOR, ORANGE_COLOR } from "../colors";


import { DARK_COLOR } from "../colors";

export default function Detail({
  navigation: { setOptions, goBack },
  route: {
    params: { params },
  },
}) {
  const { navigate } = useNavigation();
  const isDark = useColorScheme() === "dark";

  const [reviews, setReviews] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [idchange, setIdchange] = useState("");

  useFocusEffect(
    useCallback(() => {
      setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign
              name="left"
              size={24}
              color={isDark ? ORANGE_COLOR : BLUE_COLOR}
            />
          </TouchableOpacity>
        ),
      });
    }, [])
  );

  // useFocusEffect
  // 문의 사항 버튼 클릭시 modal true 함수
  const handleAdding = async () => {
    const isLogin = !!authService.currentUser;
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

  return (
    <FlatList
      style={{ paddingBottom: 30 }}
      data={reviews}
      renderItem={({ item }) => {
        <ReviewCard />;
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
            renderItem={({ item }) => {
              if (params.data.desertionNo === item.cardID) {
                return (
                  <ReviewCard
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    review={item}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    reviews={reviews}
                    setReviews={setReviews}
                    data={params.data}
                    idchange={idchange}
                    setIdchange={setIdchange}
                  />
                );
              }
            }}
            keyExtractor={(item) => item.id}
          />

          {/*등록버튼 */}
          <ReviewModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            reviews={reviews}
            setReviews={setReviews}
            isEdit={isEdit}
            data={params.data}
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
