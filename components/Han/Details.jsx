import styled from "@emotion/native";
import { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils";
import { AntDesign } from "@expo/vector-icons";
import Item from "./Item";
import {
  onSnapshot,
  collection,
  addDoc,
  setDoc,
  query,
  orderBy,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { dbService, authService } from "../../firebase";
import { useFocusEffect } from "@react-navigation/native";

export default function Details({ data }) {
  const [items, setItems] = useState([]);
  const [isLike, setIsLike] = useState(data.islike);

  const q = query(collection(dbService, "isLike"));

  const getData = async () => {
    const querySnapshot = await getDocs(q);
    const itemArray = [];
    querySnapshot.forEach((doc) => {
      itemArray.push(doc.data());
    });
    setItems(itemArray);
  };

  useFocusEffect(
    useCallback(() => {
      getData();

      return () => {
        getData();
      };
    }, [])
  );

  useEffect(() => {
    getData();
  }, []);

  // console.log('items', items);
  // console.log('data', data);

  // const q = query(collection(dbService, "isLike"));
  // const getData = () => {
  //   onSnapshot(q, (snapshot) => {
  //     const newItems = snapshot.docs.map((doc) => {
  //       const newitem = {
  //         id: doc.id,
  //         isLike: false,
  //         ...doc.data(),
  //       };
  //       return newitem;
  //     });

  //     setItems(newItems);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // 좋아요 버튼을 누르면 실행되는 함수
  // 버튼을 누르면 item의 desertionNo를 매개변수로 받은 뒤 그 값과 getData해 온 것들 중에 같고,
  // getData해 온 것들 중 userId와 로그인한 아이디가 같은 것을 변수로 지정해준다.
  // 변수에 저장된 것은 파이어 스토어의 isLike에 있는 것들 중 방금 내가 클릭한 것과 같은 데이터이다.
  // 그 데이터의 id값은 doc.id와 같기 때문에 choiceItem.id를 commentRef에 저장해서 updateDoc 할 때 사용해준다.
  // 그리고 조건에 맞는 idx를 찾아 items중 idx에 해당하는 isLike 값을 true면 false, false면 true로 바꿔준다.
  // 최신 데이터를 받아오기 위해 getData를 실행해준다.
  const isLikeChangeHandler = async (desertionNo) => {
    const choiceItem = items.find(
      (item) =>
        item.desertionNo === desertionNo &&
        item.userId === authService?.currentUser?.uid
    );
    const commentRef = doc(dbService, "isLike", choiceItem.id);
    const idx = items.findIndex(
      (item) =>
        item.desertionNo === desertionNo &&
        item.userId === authService?.currentUser?.uid
    );

    console.log("items[idx].isLike", items[idx].isLike);
    await updateDoc(commentRef, {
      isLike: !items[idx].isLike,
    });
    getData();
  };

  return (
    <>
      <ScrollWrap>
        <DetailPictureBox>
          <DetailImage
            source={{
              url: `${data.popfile}`,
            }}
            style={StyleSheet.absoluteFill}
          />
          <HeartWrapper
            onPress={() => {
              setIsLike(!isLike);
              isLikeChangeHandler(data.desertionNo);
            }}
          >
            {!authService.currentUser ? null : isLike ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="red" />
            )}
          </HeartWrapper>
        </DetailPictureBox>

        <DropShadow
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
          }}
        >
          <Item data={data} />
        </DropShadow>
      </ScrollWrap>
    </>
  );
}

const ScrollWrap = styled.View`
  padding: 5%;
`;

const DetailImage = styled.Image`
  height: ${SCREEN_HEIGHT / 3 + "px"};
  /* width: ${SCREEN_WIDTH}; */
  width: 100%;
  border-radius: 10%;
  position: relative;
`;

const DetailPictureBox = styled.View`
  width: ${SCREEN_WIDTH};
  height: ${SCREEN_HEIGHT / 3 + "px"};
  border-radius: 10%;
  margin-bottom: 5%;
  background-color: #b3b3b3;
`;

const HeartWrapper = styled.TouchableOpacity`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
`;
