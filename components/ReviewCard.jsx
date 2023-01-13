import React from "react";
import styled from "@emotion/native";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ReviewModal from "../screens/ReviewModal";
import { Alert } from "react-native";
import { deleteDoc, doc } from "firebase/firestore";
import { dbService, authService } from "./../firebase";
import { async } from "@firebase/util";

export default function ReviewCard({
  review,
  reviews,
  isOpenModal,
  setIsOpenModal,
  isEdit,
  setIsEdit,
  setReviews,
  data,
  idchange,
  setIdchange,
}) {
  // uid가 같지 않으면 rightSwipe 못하게 막는 부분
  const uid = authService.currentUser.uid;

  const handEditing = (id) => {
    if (uid === review.userId) {
      setIdchange(id);
      setIsEdit(true);
      setIsOpenModal(true);
    } else {
      Alert.alert("주의", "본인 댓글만 수정이 가능합니다.");
    }
  };

  // 2. 문의 삭제 (delete)
  const deleteReview = (id) => {
    Alert.alert("문의 사항 삭제", "정말 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소 클릭!"),
      },
      {
        text: "삭제",
        style: "destructive",
        onPress: async () => {
          // setReviews(newReviews);
          // const newReviews = reviews.filter((review) => review.id !== id);
          await deleteDoc(doc(dbService, "reviews", id));
        },
      },
    ]);
  };

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity
        onPress={() => deleteReview(review.id)}
        activeOpacity={0.6}
      >
        <DeletBox
          style={{ borderBottomWidth: 1, borderBottomColor: "#D9D9D9" }}
        >
          <Animated.Text
            style={{ color: "white", transform: [{ scale: scale }] }}
          >
            Delete
          </Animated.Text>
        </DeletBox>
      </TouchableOpacity>
    );
  };
  return (
    // uid가 같지 않으면 rightSwipe 못하게 막는 부분
    <Swipeable renderRightActions={uid === review.userId ? rightSwipe : ""}>
      <TouchableOpacity key={review.id} onPress={() => handEditing(review.id)}>
        <ReviewWrapper
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#D9D9D9",
            padding: 20,
            paddingLeft: 30,
          }}
        >
          <ReviewId>{review.nickname}</ReviewId>
          <ReviewContent>{review.contents}</ReviewContent>
        </ReviewWrapper>
      </TouchableOpacity>

      {/*수정버튼 */}
      <ReviewModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        reviews={reviews}
        setReviews={setReviews}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        id={review.id}
        data={data}
        setIdchange={setIdchange}
        idchange={idchange}
      />
    </Swipeable>
  );
}
const ReviewWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
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

const DeletBox = styled.View`
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 69px;
`;
