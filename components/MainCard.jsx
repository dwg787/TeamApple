import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
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
import { dbService } from "../firebase";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";

export default function MainCard({ item }) {
  const { navigate } = useNavigation();
  // console.log('item???', item);
  const [items, setItems] = useState([]);

  // const id = uuidv4();
  // item.id = id;
  // item.isLike = false;

  // console.log(id);

  const q = query(collection(dbService, "isLike"));

  // const getData = async () => {
  //   // const querySnapshot = await getDocs(q);
  //   // const dataArray = [];
  //   // querySnapshot.forEach((doc) => {
  //   //   dataArray.push(doc.data());
  //   // });
  //   onSnapshot(q, (snapshot) => {
  //     const newItems = snapshot.docs.map((doc) => {
  //       const newitem = {
  //         id: doc.id,
  //         isLike: false,
  //         ...doc.data(), // doc.data() : { text, createdAt, ...  }
  //       };
  //       return newitem;
  //     });
  //     setItems(newItems);
  //   });
  // };

  const addIsLike = async (data) => {
    const selectedItem = items.find(
      (item) => item.desertionNo === data.desertionNo
    );
    if (!selectedItem) {
      const id = uuidv4();
      await setDoc(doc(dbService, "isLike", id), {
        ...item,
        id,
        isLike: false,
      });
      getData();
    }
  };

  const getData = async () => {
    const querySnapshot = await getDocs(q);
    const itemArray = [];
    querySnapshot.forEach((doc) => {
      itemArray.push(doc.data());
    });
    setItems(itemArray);
  };

  useEffect(() => {
    getData();
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     getData();
  //     addIsLike();

  //     return () => {
  //       getData();
  //     };
  //   }, [])
  // );

  console.log("mainItems", items);

  return (
    // <></>
    <TouchableOpacity
      onPress={() => {
        addIsLike(item);
        navigate("Detail", {
          params: { data: item },
        });
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
          <AnimalCardLocation>
            {item.orgNm.slice(0, 2)}
            {/* {item.orgNm.length > 2 && '...'} */}
          </AnimalCardLocation>
          <AnimalCardDate>{item.happenDt}</AnimalCardDate>
        </AnimalCardDescription>
      </SingleCard>
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
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 170px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 3px 2px;
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
