import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LocationList from '../components/LocationList';
import { KindList } from '../components/KindList';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
// import { useQuery, useInfiniteQuery } from 'react-query';
// import Loader from '../components/Loader';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function Filter({ navigation }) {
  const { navigate } = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedKind, setSelectedKind] = useState();

  // const {
  //   data: rawData,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery('animal_list', fetchData);

  const LocationData = [
    {
      orgCd: 6110000,
      orgdownNm: '서울',
    },
    {
      orgCd: 6260000,
      orgdownNm: '부산',
    },
    {
      orgCd: 6270000,
      orgdownNm: '대구',
    },
    {
      orgCd: 6280000,
      orgdownNm: '인천',
    },
    {
      orgCd: 6290000,
      orgdownNm: '광주',
    },
    {
      orgCd: 5690000,
      orgdownNm: '세종',
    },
    {
      orgCd: 6300000,
      orgdownNm: '대전',
    },
    {
      orgCd: 6310000,
      orgdownNm: '울산',
    },
    {
      orgCd: 6410000,
      orgdownNm: '경기',
    },
    {
      orgCd: 6420000,
      orgdownNm: '강원',
    },
    {
      orgCd: 6430000,
      orgdownNm: '충북',
    },
    {
      orgCd: 6440000,
      orgdownNm: '충남',
    },
    {
      orgCd: 6450000,
      orgdownNm: '전북',
    },
    {
      orgCd: 6460000,
      orgdownNm: '전남',
    },
    {
      orgCd: 6470000,
      orgdownNm: '경북',
    },
    {
      orgCd: 6480000,
      orgdownNm: '경남',
    },
    {
      orgCd: 6500000,
      orgdownNm: '제주',
    },
  ];

  const KindData = [
    { id: 417000, kind: '개' },
    { id: 422400, kind: '고양이' },
    { id: 429900, kind: '기타' },
  ];

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (isError) {
  //   console.log('error 내용:', error);
  //   return (
  //     <View>
  //       <Text>오류가 발생하였습니다!</Text>
  //     </View>
  //   );
  // }

  return (
    // <></>
    <FilterPageBackGround>
      <TextWrapper>
        <Text style={{ fontSize: 20, color: 'white' }}>
          지역을 선택해주세요
        </Text>
      </TextWrapper>
      <FlatList
        contentContainerStyle={styles.locationFlatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        // onEndReached={loadMoreData}
        data={LocationData}
        extraData={selectedLocation}
        renderItem={({ item }) => {
          const isSelectedLocation =
            item.orgCd === selectedLocation ? true : false;
          return (
            <LocationList
              loc={item.orgdownNm}
              onPress={() => setSelectedLocation(item.orgCd)}
              isSelectedLocation={isSelectedLocation}
            />
          );
        }}
        keyExtractor={(item) => item?.orgCd}
        ItemSeparatorComponent={<View style={{ width: 10 }} />}
      />
      <TextWrapper>
        <Text style={{ fontSize: 20, color: 'white' }}>
          축종을 선택해주세요
        </Text>
      </TextWrapper>
      <FlatList
        contentContainerStyle={styles.kindFlatList}
        horizontal
        data={KindData}
        extraData={selectedKind}
        renderItem={({ item }) => {
          const isSelectedKind = item.id === selectedKind ? true : false;
          return (
            <KindList
              kind={item.kind}
              onPress={() => setSelectedKind(item.id)}
              isSelectedKind={isSelectedKind}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View style={{ width: 10 }} />}
      />
      <FilterBtnWrapper>
        <FilterBtn
          onPress={() => {
            console.log(
              '친구들 보러가기 클릭!',
              selectedLocation,
              selectedKind
            );
            if (selectedLocation && selectedKind) {
              navigate('Stacks', {
                screen: 'Main',
                params: { selectedLocation, selectedKind },
              });
            } else {
              Alert.alert('지역과 축종을 선택해주세요!');
            }
          }}
        >
          <TempText>친구들 보러가기</TempText>
        </FilterBtn>
      </FilterBtnWrapper>
    </FilterPageBackGround>
  );

  // if (!isLoading) {
  // console.log(rawData.pages);
  // const LocationData = rawData?.pages[0]?.data?.response?.body?.items?.item;
  // const LocationData = JSON.parse(fromAPI?.data.request._response).response
  //   .body.items.item;
  // const LocationData = rawData?.data?.response?.body?.items?.item;
  // }
}

const FilterBtn = styled.TouchableOpacity`
  /* width: 100; */
  background-color: #f19936;
  padding: 10px 15px;
  border-radius: 25px;
  align-items: center;
`;

const TempText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text};
  color: white;
`;

const FilterPageBackGround = styled.SafeAreaView`
  flex: 1;
  background-color: #0c68f2;
  /* align-items: center; */
`;

const FilterBtnWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.View`
  margin-top: 100px;
  align-items: center;
`;

const styles = StyleSheet.create({
  locationFlatList: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  kindFlatList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});

// const LocationWrapper = styled.View`
//   flex: 1;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   grid-template-rows: 1fr;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
// `;

// const KindFlatList = styled.FlatList`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;
