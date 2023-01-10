// import { useNavigation } from '@react-navigation/native';
import { View, FlatList, SafeAreaView, useColorScheme } from 'react-native';
import { useState } from 'react';
import { useQuery, useQueryClient, useInfiniteQuery } from 'react-query';
import styled from '@emotion/native';
import { fetchData } from '../api';
import MainCard from '../components/MainCard';
import Loader from '../components/Loader';
import DropShadow from 'react-native-drop-shadow';
import { DARK_COLOR } from '../colors';

export default function Main() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const isDark = useColorScheme() === 'dark';

  // const {
  //   data: rawData,
  //   isLoading,
  //   // isError,
  //   // error,
  // } = useQuery('animal_list', fetchData);

  const {
    data: rawData,
    isLoading,
    isFetching,
    isFetchingNextPage,
    // isError,
    // error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['animal_list'],
    ({ pageParam = 1 }) => fetchData(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        // console.log('lastPage', lastPage);
        // console.log('pages', pages[0].pageNo);
        return lastPage?.pageNo ===
          Math.ceil(lastPage?.totalCount / lastPage?.numOfRows)
          ? undefined
          : lastPage?.pageNo + 1;
      },
    }
  );

  // console.log('rawData:', rawData);

  const onRefresh = async () => {
    setIsRefreshing(true);
    // await getData();
    //refetch
    // await Promise.all();
    await queryClient.refetchQueries(['animal_list']);
    setIsRefreshing(false);
  };

  const loadMoreData = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  // if (isError) {
  //   console.log('error 내용:', error.message);
  //   return (
  //     <View>
  //       <Text>오류가 발생하였습니다!</Text>
  //     </View>
  //   );
  // }

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading) {
    const animalList = rawData?.pages.map((page) => page.items.item).flat();
    const totalPosting = animalList?.length || 0;
    // console.log(
    //   'animalList:',
    //   rawData.pages.map((page) => page.items.item).flat()
    // );
    // console.log('useInfiniteQuery 적용 api 호출', animalList);
    // const detailData = data.response.body.items.item;
    return (
      <SafeAreaView style={{ backgroundColor: isDark ? DARK_COLOR : 'white' }}>
        <StyleTopHeaderPostingCounter>
          {/* <View>
            <StyledBtn onPress={() => fetchNextPage()}></StyledBtn>
          </View> */}
          <TextA>
            총 <TextB>{totalPosting}</TextB> 마리
          </TextA>
        </StyleTopHeaderPostingCounter>
        <AnimalCardContainer>
          <FlatList
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreData}
            data={animalList}
            renderItem={({ item }) => <MainCard item={item} />}
            keyExtractor={(item) => item.desertionNo}
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
          />
        </AnimalCardContainer>
      </SafeAreaView>
    );
  }
}

const StyleTopHeaderPostingCounter = styled.View`
  flex-direction: row-reverse;
  background-color: #fff;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  border-style: solid;
  margin-right: 10px;
`;

const TextA = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

const TextB = styled.Text`
  color: #ff0000;
`;

const AnimalCardContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
`;
