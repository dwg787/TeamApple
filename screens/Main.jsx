import {
  View,
  FlatList,
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { useCallback, useState } from "react";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import styled from "@emotion/native";
import { fetchData, fetchFilteredData } from "../api";
import MainCard from "../components/MainCard";
import Loader from "../components/Loader";
import DropShadow from "react-native-drop-shadow";
import { BLUE_COLOR, DARK_COLOR, ORANGE_COLOR } from "../colors";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Main() {
  const isDark = useColorScheme() === "dark";
  const { setOptions, reset } = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const { selectedLocation, selectedKind } = useSelector(
    (state) => state.selection.selection
  );

  // console.log(
  //   'filter 페이지에서 main으로 넘겨준 선택값:',
  //   selectedLocation,
  //   selectedKind
  // );
  // console.log(
  //   'filter 페이지에서 넘겨준 축종 코드:',
  //   params.selectedKind,
  //   'filter 페이지에서 넘겨준 시도 코드:',
  //   params.selectedLocation
  // );

  // const {
  //   data: rawData,
  //   isLoading,
  //   // isError,
  //   // error,
  // } = useQuery('animal_list', fetchData);

  const {
    data: rawData,
    isLoading,
    // isFetching,
    // isFetchingNextPage,
    // isError,
    // error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["animal_list"],
    ({ pageParam = 1 }) =>
      fetchFilteredData(selectedLocation, selectedKind, pageParam),
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

  useFocusEffect(
    useCallback(() => {
      setOptions({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => reset({ index: 0, routes: [{ name: "Filter" }] })}
          >
            <AntDesign
              name='left'
              size={24}
              color={isDark ? ORANGE_COLOR : BLUE_COLOR}
            />
          </TouchableOpacity>
        ),
      });
    }, [])
  );

  const onRefresh = async () => {
    setIsRefreshing(true);
    // await getData();
    //refetch
    // await Promise.all();
    await queryClient.refetchQueries(["animal_list"]);
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
      <SafeAreaView style={{ backgroundColor: isDark ? "#1B1D21" : "white" }}>
        <StyleTopHeaderPostingCounter
          style={{ backgroundColor: isDark ? "#1B1D21" : "white" }}
        >
          <TextA style={{ color: isDark ? "white" : "black" }}>
            총{" "}
            <TextB style={{ color: isDark ? ORANGE_COLOR : ORANGE_COLOR }}>
              {totalPosting}
            </TextB>{" "}
            마리
          </TextA>
        </StyleTopHeaderPostingCounter>
        {/* <AnimalCardContainer> */}
        {/* <TouchableOpacity
            onPress={() =>
              navigate('Detail', {
                params: { data: animalList },
              })
            }
          > */}
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
        {/* </TouchableOpacity> */}
        {/* </AnimalCardContainer> */}
      </SafeAreaView>
    );
  }
}

const StyleTopHeaderPostingCounter = styled.View`
  flex-direction: row-reverse;
  background-color: #fff;
  width: 100%;
  height: 40px;
  margin-top: 15px;
  margin-right: -20px;
  align-items: center;
  border-style: solid;
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
