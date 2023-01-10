import React from "react";
import { Alert } from "react-native";

export default function Reviewedit({ reviews, setReviews }) {
  // 2. 문의 삭제 (delete)
  // 삭제 이모티콘  터치 시 해당 문의 댓글 삭제
  const deleteReview = (id) => {
    // 1.id 값을 받아서 해당 배열 요소를 제외한 나머지를 새로운 배열로 받는다.
    // 2. setReviws
    Alert.alert("문의 사항 삭제", "정말 삭제하시겠습니까?"),
      [
        {
          text: "취소",
          style: "cancel",
          onPress: () => console.log("취소 클릭!"),
        },
        {
          text: "삭제",
          style: "destructive",
          onPress: () => {
            const newReviews = reviews.filter((review) => review.id !== id);
            setReviews(newReviews);
          },
        },
      ];
  };

  return;
  <></>;
}
