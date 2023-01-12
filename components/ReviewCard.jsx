import React from "react";
import styled from "@emotion/native";
import { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import Review from "../screens/ReviewModal";
import { doc, deleteDoc } from "@firebase/firestore";
import { dbService } from "../firebase";
import { async } from "@firebase/util";
import ReviewModal from "./../screens/ReviewModal";

export default function ReviewCard({
  isOpenModal,
  setIsOpenModal,
  review,
  reviews,
  isEdit,
  setIsEdit,
  setReviews,
  change,
  setChange,
  data,
  addReview,
}) {
  const handEditing = async (id) => {
    setChange(id);
    setIsEdit(true);
    setIsOpenModal(true);
  };

  // 2. 문의 삭제 (delete)
  const deleteReview = (id, userId) => {
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
          // const newReviews = reviews.filter((review) => review.id !== userId);
          if (userId === authService.currentUser.uid) {
            await deleteDoc(doc(dbService, "reviews", id));
          }
        },
      },
    ]);
  };

  const rigthSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity
        onPress={() => deleteReview(review.id, review.userId)}
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
    <Swipeable renderRightActions={rigthSwipe}>
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

      {/*수정버튼 edit 빼줘야된다.*/}

      <ReviewModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        reviews={reviews}
        setReviews={setReviews}
        id={change}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        data={data}
        addReview={addReview}
      />
    </Swipeable>
  );
}
const ReviewWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  /* background-color: white; */
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
