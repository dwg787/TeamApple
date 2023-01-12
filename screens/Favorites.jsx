import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from "react-native";
import { SCREEN_HEIGHT } from "../utils";
import {
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
import { dbService, authService } from "../firebase";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import DropShadow from "react-native-drop-shadow";
import { AntDesign } from "@expo/vector-icons";
import { DARK_COLOR, ORANGE_COLOR, BLUE_COLOR } from "../colors";

export default function Favorites() {
  const isDark = useColorScheme() === "dark";
  const { navigate, setOptions, goBack } = useNavigation();
  const [items, setItems] = useState([]);

  // 파이어 스토어 isLike에 있는 것들을 가져와서 items에 저장한다.
  const q = query(collection(dbService, "isLike"));
  const getData = async () => {
    const querySnapshot = await getDocs(q);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    setItems(dataArray);
  };

  // 첫 렌더링시에 getData해주고, 스크린을 벗어날때도 해준다.
  useFocusEffect(
    useCallback(() => {
      getData();
      setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign
              name="left"
              size={24}
              style={{ marginLeft: 16 }}
              color={isDark ? ORANGE_COLOR : BLUE_COLOR}
            />
          </TouchableOpacity>
        ),
      });
      return () => getData();
    }, [])
  );

  return (
    <>
      {/* 1. 로그인 상태라면 페이지를 띄워주고 아니라면 로그인 하라는 안내 페이지를 띄워준다. */}
      {/* 2. item.isLike가 true이고, item.userId가 로그인한 아이디와 같은 것들만 관심목록 페이지에 띄워준다. */}
      {!!authService.currentUser ? (
        <ScrollView style={{ backgroundColor: isDark ? "#1B1D21" : "white" }}>
          {items.map((item) => {
            if (item.isLike && item.userId === authService?.currentUser?.uid) {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    getData();
                    navigate("Detail", {
                      params: { data: item },
                    });
                  }}
                >
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
                    <SingleCard
                      style={{ backgroundColor: isDark ? "#212123" : "white" }}
                    >
                      <AnimalCardPicture>
                        <AnimalPic source={{ url: `${item.popfile}` }} />
                      </AnimalCardPicture>
                      <AnimalCardType>
                        <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>
                          성별
                        </TextC>
                        <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>
                          품종
                        </TextC>
                        <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>
                          나이
                        </TextC>
                        <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>
                          지역
                        </TextC>
                        <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>
                          등록일
                        </TextC>
                      </AnimalCardType>
                      <AnimalCardDescription>
                        <AnimalCardGender
                          style={{ color: isDark ? "white" : "black" }}
                        >
                          {item.sexCd === "M" ? "남" : "W" ? "여" : "잡종"}
                        </AnimalCardGender>
                        <AnimalCardKind
                          style={{ color: isDark ? "white" : "black" }}
                        >
                          {item.kindCd}
                        </AnimalCardKind>
                        <AnimalCardAge
                          style={{ color: isDark ? "white" : "black" }}
                        >
                          {item.age}
                        </AnimalCardAge>
                        <AnimalCardLocation
                          style={{ color: isDark ? "white" : "black" }}
                        >
                          {item.orgNm}
                        </AnimalCardLocation>
                        <AnimalCardDate
                          style={{ color: isDark ? "white" : "black" }}
                        >
                          {item.happenDt}
                        </AnimalCardDate>
                      </AnimalCardDescription>
                    </SingleCard>
                  </DropShadow>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      ) : (
        <VisitorView>
          <Text>로그인이 필요한 서비스입니다.</Text>
        </VisitorView>
      )}
    </>
  );
}

const AnimalPic = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 70%;
`;

const TextC = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
`;

const SingleCard = styled.View`
  margin-left: 2.5%;
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: 170px;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #fff;
`;

const AnimalCardPicture = styled.View`
  margin-left: 25px;
  width: 120px;
  height: 120px;
  border-radius: 70%;
  background-color: #b3b3b3;
`;

const AnimalCardType = styled.View`
  margin-left: 30px;
  font-size: 25px;
  font-weight: bold;
`;

const AnimalCardDescription = styled.View`
  margin-left: 20px;
  position: relative;
`;

const AnimalCardKind = styled.Text`
  margin-top: 9px;
  position: relative;
`;

const AnimalCardGender = styled.Text`
  margin-top: 9px;
  position: relative;
`;

const AnimalCardAge = styled.Text`
  margin-top: 8px;
  position: relative;
`;

const AnimalCardLocation = styled.Text`
  margin-top: 8px;
  position: relative;
`;

const AnimalCardDate = styled.Text`
  margin-top: 6px;
  position: relative;
`;

const VisitorView = styled.View`
  height: ${SCREEN_HEIGHT / 1.5 + "px"};
  justify-content: center;
  align-items: center;
`;
