import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "@emotion/native";
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
import { dbService, authService } from "../firebase";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";
import DropShadow from "react-native-drop-shadow";
import { DARK_COLOR } from "../colors";

export default function MainCard({ item }) {
  const { navigate } = useNavigation();
  const [items, setItems] = useState([]);

  // const id = uuidv4();
  // item.id = id;
  // item.isLike = false;

  // console.log(id);

  const isDark = useColorScheme() === "dark";

  const q = query(collection(dbService, "isLike"));

  // 데이터로 넘겨받은 item 중에서 get으로 받아온 item의 desertionNo가 같고,
  // get으로 받아온 item의 userId가 로그인한 아이디가 같은 것을 변수에 저장해주고
  // 변수의 조건과 맞지 않고 로그인 했을때에만 isLike에 데이터를 추가해준다.
  // 데이터를 추가하고 최신 데이터를 가져오기 위해서 getData 해준다.
  const addIsLike = async (data) => {
    const selectedItem = items.find(
      (item) =>
        item.desertionNo === data.desertionNo &&
        item.userId === authService?.currentUser?.uid
    );
    if (!selectedItem && !!authService.currentUser) {
      const id = uuidv4();
      await setDoc(doc(dbService, "isLike", data.id), {
        ...item,
        id,
        isLike: false,
        userId: authService?.currentUser?.uid,
      });
      try {
        getData();
      } catch (error) {
        console.log("addIsLike getData error", error);
      }
    }
  };

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(q);
      const itemArray = [];
      querySnapshot.forEach((doc) => {
        itemArray.push(doc.data());
      });
      setItems(itemArray);
    } catch (error) {
      console.log("getData error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        addIsLike(item);
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
        <SingleCard style={{ backgroundColor: isDark ? "#212123" : "white" }}>
          <AnimalCardPicture>
            <AnimalPic source={{ url: `${item.popfile}` }} />
          </AnimalCardPicture>
          <AnimalCardType>
            <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>성별</TextC>
            <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>품종</TextC>
            <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>나이</TextC>
            <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>지역</TextC>
            <TextC style={{ color: isDark ? DARK_COLOR : "black" }}>
              등록일
            </TextC>
          </AnimalCardType>
          <AnimalCardDescription>
            <AnimalCardGender style={{ color: isDark ? "white" : "black" }}>
              {item.sexCd === "M" ? "남" : "W" ? "여" : "중성"}
            </AnimalCardGender>
            <AnimalCardKind style={{ color: isDark ? "white" : "black" }}>
              {item.kindCd}
            </AnimalCardKind>
            <AnimalCardAge style={{ color: isDark ? "white" : "black" }}>
              {item.age}
            </AnimalCardAge>
            <AnimalCardLocation style={{ color: isDark ? "white" : "black" }}>
              {item.orgNm.slice(0, 2)}
              {/* {item.orgNm.length > 2 && '...'} */}
            </AnimalCardLocation>
            <AnimalCardDate style={{ color: isDark ? "white" : "black" }}>
              {item.happenDt}
            </AnimalCardDate>
          </AnimalCardDescription>
        </SingleCard>
      </DropShadow>
    </TouchableOpacity>
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
