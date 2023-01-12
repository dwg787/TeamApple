import { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SCREEN_HEIGHT } from "../utils";
import { collection, query, getDocs } from "firebase/firestore";
import { dbService, authService } from "../firebase";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import DropShadow from "react-native-drop-shadow";

export default function Favorites() {
  const { navigate } = useNavigation();
  const [items, setItems] = useState([]);

  const q = query(collection(dbService, "isLike"));
  const getData = async () => {
    const querySnapshot = await getDocs(q);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    setItems(dataArray);
  };

  useFocusEffect(
    useCallback(() => {
      getData();

      return () => getData();
    }, [])
  );

  return (
    <>
      {!!authService.currentUser ? (
        <ScrollView>
          {items.map((item) => {
            if (item.isLike) {
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
                    <SingleCard>
                      <AnimalCardPicture>
                        <AnimalPic source={{ url: `${item.popfile}` }} />
                      </AnimalCardPicture>
                      <AnimalCardType>
                        <TextC>성별</TextC>
                        <TextC>품종</TextC>
                        <TextC>나이</TextC>
                        <TextC>지역</TextC>
                        <TextC>등록일</TextC>
                      </AnimalCardType>
                      <AnimalCardDescription>
                        <AnimalCardGender>{item.sexCd}</AnimalCardGender>
                        <AnimalCardKind>{item.kindCd}</AnimalCardKind>
                        <AnimalCardAge>{item.age}</AnimalCardAge>
                        <AnimalCardLocation>{item.orgNm}</AnimalCardLocation>
                        <AnimalCardDate>{item.happenDt}</AnimalCardDate>
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
          <Text>로그인 해주세요.</Text>
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
