import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  ListTitle,
  Image,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from "react-native";
import { useQuery } from "react-query";
import { getDetail } from "../api";
import styled from "@emotion/native";
import iconSRC from "../assets/icon.png";
import { DARK_COLOR } from "../colors";

export default function Main() {
  const isDark = useColorScheme() === "dark";
  const { navigate } = useNavigation();

  const { isLoading, data, error } = useQuery(["animal"], getDetail);

  const totalPosting = 0;

  const animalList = [
    { card_kind: "토끼", card_gender: "수컷", card_age: "2022", card_location: "서울특별시 마포구 마포동", card_date: "2021-10-10", card_picture: { iconSRC } },

    {
      card_kind: "래브라도 리트리버",
      card_gender: "암컷",
      card_age: "2020",
      card_location: "서울특별시 송파구 송파동",
      card_date: "2021-1-13",
      card_picture: { iconSRC },
    },
  ];

  if (!isLoading) {
    const detailData = data.response.body.items.item;
    return (
      <SafeAreaView style={{ backgroundColor: isDark ? DARK_COLOR : "white" }}>
        <StyleTopHeaderPostingCounter>
          <TextA>
            총 <TextB>{totalPosting}</TextB> 마리
          </TextA>
        </StyleTopHeaderPostingCounter>
        <View>
          {detailData.map((item) => (
            <TouchableOpacity
              key={item.desertionNo}
              onPress={() =>
                navigate("Detail", {
                  data: item,
                })
              }
            >
              <Text>{item.desertionNo}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <AnimalCardContainer>
          <ScrollView>
            {/* 카드 1 */}
            <TouchableOpacity
              onPress={() =>
                navigate("Detail", {
                  params: { data: detailData },
                })
              }
            >
              <SingleCard>
                <AnimalCardPicture>
                  <Image source={animalList[0].card_picture} />
                </AnimalCardPicture>
                <AnimalCardType>
                  <TextC>성별</TextC>
                  <TextC>품종</TextC>
                  <TextC>나이</TextC>
                  <TextC>지역</TextC>
                  <TextC>등록일</TextC>
                </AnimalCardType>
                <AnimalCardDescription>
                  <AnimalCardKind>{animalList[0].card_kind}</AnimalCardKind>
                  <AnimalCardGender>
                    {animalList[0].card_gender}
                  </AnimalCardGender>
                  <AnimalCardAge>{animalList[0].card_age}</AnimalCardAge>
                  <AnimalCardLocation>
                    {animalList[0].card_location}
                  </AnimalCardLocation>
                  <AnimalCardDate>{animalList[0].card_date}</AnimalCardDate>
                </AnimalCardDescription>
              </SingleCard>
            </TouchableOpacity>

            {/* 카드 2 */}
            <TouchableOpacity
              onPress={() =>
                navigate("Detail", {
                  params: { data: detailData },
                })
              }
            >
              <SingleCard>
                <AnimalCardPicture>
                  <Image source={animalList[0].card_picture} />
                </AnimalCardPicture>
                <AnimalCardType>
                  <TextC>성별</TextC>
                  <TextC>품종</TextC>
                  <TextC>나이</TextC>
                  <TextC>지역</TextC>
                  <TextC>등록일</TextC>
                </AnimalCardType>
                <AnimalCardDescription>
                  <AnimalCardKind>{animalList[0].card_kind}</AnimalCardKind>
                  <AnimalCardGender>
                    {animalList[0].card_gender}
                  </AnimalCardGender>
                  <AnimalCardAge>{animalList[0].card_age}</AnimalCardAge>
                  <AnimalCardLocation>
                    {animalList[0].card_location}
                  </AnimalCardLocation>
                  <AnimalCardDate>{animalList[0].card_date}</AnimalCardDate>
                </AnimalCardDescription>
              </SingleCard>
            </TouchableOpacity>

            {/* 카드 4 */}
            <TouchableOpacity
              onPress={() =>
                navigate("Detail", {
                  params: { data: detailData },
                })
              }
            >
              <SingleCard>
                <AnimalCardPicture>
                  <Image source={animalList[0].card_picture} />
                </AnimalCardPicture>
                <AnimalCardType>
                  <TextC>성별</TextC>
                  <TextC>품종</TextC>
                  <TextC>나이</TextC>
                  <TextC>지역</TextC>
                  <TextC>등록일</TextC>
                </AnimalCardType>
                <AnimalCardDescription>
                  <AnimalCardKind>{animalList[0].card_kind}</AnimalCardKind>
                  <AnimalCardGender>
                    {animalList[0].card_gender}
                  </AnimalCardGender>
                  <AnimalCardAge>{animalList[0].card_age}</AnimalCardAge>
                  <AnimalCardLocation>
                    {animalList[0].card_location}
                  </AnimalCardLocation>
                  <AnimalCardDate>{animalList[0].card_date}</AnimalCardDate>
                </AnimalCardDescription>
              </SingleCard>
            </TouchableOpacity>

            {/* 카드 3 */}
            <TouchableOpacity
              onPress={() =>
                navigate("Detail", {
                  params: { data: detailData },
                })
              }
            >
              <SingleCard>
                <AnimalCardPicture>
                  <Image source={animalList[0].card_picture} />
                </AnimalCardPicture>
                <AnimalCardType>
                  <TextC>성별</TextC>
                  <TextC>품종</TextC>
                  <TextC>나이</TextC>
                  <TextC>지역</TextC>
                  <TextC>등록일</TextC>
                </AnimalCardType>
                <AnimalCardDescription>
                  <AnimalCardKind>{animalList[0].card_kind}</AnimalCardKind>
                  <AnimalCardGender>
                    {animalList[0].card_gender}
                  </AnimalCardGender>
                  <AnimalCardAge>{animalList[0].card_age}</AnimalCardAge>
                  <AnimalCardLocation>
                    {animalList[0].card_location}
                  </AnimalCardLocation>
                  <AnimalCardDate>{animalList[0].card_date}</AnimalCardDate>
                </AnimalCardDescription>
              </SingleCard>
            </TouchableOpacity>
          </ScrollView>
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

const TextC = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
`;

const AnimalCardContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
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
  background-color: black;
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
