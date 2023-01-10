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
import Review from "./../screens/Review";

export default function ReviewCard({
  review,
  reviews,
  deleteReview,
  isOpenModal,
  setIsOpenModal,
  isEdit,
  setIsEdit,
  setReviews,
}) {
  const handEditing = () => {
    setIsEdit(true);
    setIsOpenModal(true);
  };

  console.log(reviews);

  const rigthSwipe = (progress, dragX) => {
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
        <DeletBox>
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
      <TouchableOpacity key={review.id} onPress={handEditing}>
        <ReviewWrapper
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#D9D9D9",
            padding: 20,
            paddingLeft: 30,
          }}
        >
          <ReviewId>{review.id}</ReviewId>
          <ReviewContent>{review.contents}</ReviewContent>
        </ReviewWrapper>
      </TouchableOpacity>

      {/*수정버튼 */}
      <Review
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        reviews={reviews}
        setReviews={setReviews}
        id={review.id}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
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
