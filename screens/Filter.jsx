import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useQuery, useInfiniteQuery } from 'react-query';
import Loader from '../components/Loader';
import LocationList from '../components/LocationList';
import { fetchData } from '../api';
import { KindList } from '../components/KindList';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';

export default function Filter({ navigation }) {
  const { navigate } = useNavigation();

  // useEffect(() => {
  //   navigation.getParent().setOptions({
  //     tabBarStyle: { display: 'none' },
  //   });
  // }, []);

  const {
    data: rawData,
    isLoading,
    isError,
    error,
  } = useQuery('animal_list', fetchData);
  const KindData = [
    { id: 1, kind: '강아지' },
    { id: 2, kind: '고양이' },
    { id: 3, kind: '기타' },
  ];
  // const { data: rawData, isLoading } = useInfiniteQuery(
  //   ['animal_list'],
  //   fetchData
  // );

  //loading은 캐싱이 반영

  // const loadMoreData = async () => {
  //   if (hasNextLocation) {
  //     await fetchNextPage();
  //   }
  // };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log('error 내용:', error);
    return (
      <View>
        <Text>오류가 발생하였습니다!</Text>
      </View>
    );
  }

  if (!isLoading) {
    // console.log(rawData.pages);
    // const LocationData = rawData?.pages[0]?.data?.response?.body?.items?.item;
    // const LocationData = JSON.parse(fromAPI?.data.request._response).response
    //   .body.items.item;
    const LocationData = rawData?.data?.response?.body?.items?.item;
    return (
      // <></>
      <FilterPageBackGround>
        <TextWrapper>
          <Text style={{ color: 'white' }}>지역을 선택해주세요</Text>
        </TextWrapper>
        <FlatList
          contentContainerStyle={styles.locationFlatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          // onEndReached={loadMoreData}
          data={LocationData}
          renderItem={({ item }) => <LocationList loc={item?.orgdownNm} />}
          keyExtractor={(item) => item?.orgCd}
          ItemSeparatorComponent={<View style={{ width: 10 }} />}
        />
        <TextWrapper>
          <Text style={{ color: 'white' }}>축종을 선택해주세요</Text>
        </TextWrapper>
        <FlatList
          contentContainerStyle={styles.kindFlatList}
          horizontal
          data={KindData}
          renderItem={({ item }) => <KindList kind={item.kind} />}
          keyExtractor={(item) => item.id}
          // contentContainerStyle={{ paddingHorizontal: 20 }}
          ItemSeparatorComponent={<View style={{ width: 10 }} />}
        />
        <FilterBtnWrapper>
          <FilterBtn
            onPress={() => {
              console.log('친구들 보러가기 클릭!');
              navigate('Stacks', {
                screen: 'Main',
                // params: { movieId: item.id },
              });
            }}
          >
            <TempText>친구들 보러가기</TempText>
          </FilterBtn>
        </FilterBtnWrapper>
      </FilterPageBackGround>
    );
  }
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
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  kindFlatList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

// const LocationFlatList = styled.FlatList`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;

// const KindFlatList = styled.FlatList`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;
