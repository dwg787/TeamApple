import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useQuery, useInfiniteQuery } from 'react-query';
import Loader from '../components/Loader';
import LocationList from '../components/LocationList';
import { fetchData } from '../api';
import { useEffect } from 'react';
import { KindList } from '../components/KindList';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

export default function Filter() {
  const { navigate } = useNavigation();
  // const [isPressed, setIsPressed] = useState(false);
  // const fromAPI = useQuery('animal_list', fetchData);
  const KindData = [
    { id: 1, kind: '개' },
    { id: 2, kind: '고양이' },
    { id: 3, kind: '기타' },
  ];
  const { data: rawData, isLoading } = useInfiniteQuery(
    ['animal_list'],
    fetchData
  );

  // const loadMoreData = async () => {
  //   if (hasNextLocation) {
  //     await fetchNextPage();
  //   }
  // };

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading) {
    // console.log(rawData.pages);
    const LocationData = rawData.pages[0].data.response.body.items.item;
    return (
      <>
        <Text style={{ color: 'white' }}>지역을 선택해주세요</Text>
        <FlatList
          horizontal
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsHorizontalScrollIndicator={false}
          // onEndReached={loadMoreData}
          data={LocationData}
          renderItem={({ item }) => <LocationList loc={item?.orgdownNm} />}
          keyExtractor={(item) => item?.orgCd}
          ItemSeparatorComponent={<View style={{ width: 10 }} />}
        />
        <Text style={{ color: 'white' }}>축종을 선택해주세요</Text>
        <FlatList
          horizontal
          data={KindData}
          renderItem={({ item }) => <KindList kind={item.kind} />}
          keyExtractor={(item) => item.id}
        />
        <FilterBtn
          onPress={navigate('Stacks', {
            screen: 'Main',
            // params: { movieId: item.id },
          })}
        >
          <TempText>친구들 보러가기</TempText>
        </FilterBtn>
      </>
    );
  }
}

const FilterBtn = styled.TouchableOpacity`
  /* width: 100; */
  background-color: #f19936;
  padding: 10px 15px;
  border-radius: 5px;
  align-items: center;
  /* border-color: ${(props) => props.theme.color.title}; */
`;

const TempText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.upcomingText};
  color: white;
`;
