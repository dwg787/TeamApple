import styled from '@emotion/native';
import { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils';
import { AntDesign } from '@expo/vector-icons';
import Item from './Item';
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
} from 'firebase/firestore';
import { dbService } from '../../firebase';
import { useFocusEffect } from '@react-navigation/native';

export default function Details({ data }) {
  const [items, setItems] = useState([]);
  const q = query(collection(dbService, 'isLike'));

  const getData = async () => {
    const querySnapshot = await getDocs(q);
    const itemArray = [];
    querySnapshot.forEach((doc) => {
      itemArray.push(doc.data());
    });
    setItems(itemArray);
  };
  // console.log(items);

  useFocusEffect(
    useCallback(() => {
      getData();

      return () => {
        console.log('hi');
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

  const isLikeChangeHandler = async (desertionNo) => {
    // console.log('items', items);
    // console.log('desertionNo', desertionNo);
    const itemId = items.find((item) => item.desertionNo === desertionNo);
    // console.log(itemId);
    const commentRef = doc(dbService, 'isLike', itemId.id);
    // console.log('commentRef', commentRef);
    const idx = items.findIndex((item) => item.desertionNo === desertionNo);
    // console.log('번호', idx);
    // console.log('items[idx].isLike', items[idx].isLike);
    await updateDoc(commentRef, {
      isLike: !items[idx].isLike,
    });
    getData();
  };

  // console.log('data??', getDoc());

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
          <HeartWrapper onPress={() => isLikeChangeHandler(data.desertionNo)}>
            {data.isLike ? (
              <AntDesign name='heart' size={24} color='red' />
            ) : (
              <AntDesign name='hearto' size={24} color='red' />
            )}
          </HeartWrapper>
        </DetailPictureBox>

        <DropShadow
          style={{
            shadowColor: '#000',
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
  height: ${SCREEN_HEIGHT / 3 + 'px'};
  /* width: ${SCREEN_WIDTH}; */
  width: 100%;
  border-radius: 10%;
  position: relative;
`;

const DetailPictureBox = styled.View`
  width: ${SCREEN_WIDTH};
  height: ${SCREEN_HEIGHT / 3 + 'px'};
  border-radius: 10%;
  margin-bottom: 5%;
  background-color: #b3b3b3;
`;

const HeartWrapper = styled.TouchableOpacity`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
`;
