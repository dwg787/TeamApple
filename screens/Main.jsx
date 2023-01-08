import {SafeAreaView, View, Text, ListTitle, Image } from "react-native";
import styled from "@emotion/native";
import iconSRC from "../assets/icon.png";

const totalPosting = 0;

const animalList = [
  { card_kind : "토끼",
    card_gender : "수컷",
    card_age : "2022",
    card_location : "서울특별시 마포구 마포동",
    card_date : "2021-10-10",
    card_picture : {iconSRC},
  }, {
    card_kind : "래브라도 리트리버",
    card_gender : "암컷",
    card_age : "2020",
    card_location : "서울특별시 송파구 송파동",
    card_date : "2021-1-13",
    card_picture : {iconSRC},
  }
];


export default function Main() {
  return (
    <SafeAreaView>
      <StyleTopHeaderPostingCounter>
        <TextA>총 <TextB>{totalPosting}</TextB> 마리</TextA>
      </StyleTopHeaderPostingCounter>

      <AnimalCardContainer>

        <SingleCard>
        <AnimalCardPicture>
          <Image source={animalList[0].card_picture} />
        </AnimalCardPicture>
        <AnimalCardDescription>
          

        </AnimalCardDescription>

        </SingleCard>

      </AnimalCardContainer>
    
    
    </SafeAreaView>

  );
}


const StyleTopHeaderPostingCounter = styled.View`
  flexDirection: row-reverse;
  background-color: #fff;
  padding : 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  border-style: solid;
  margin-right : 10px;
`;

const TextA = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;

`;

const TextB = styled.Text`
color : #ff0000;
`;

const AnimalCardContainer = styled.View`
width : 100%;
height : 100%;
  flex-direction: column;
  background-color: #fff;
  padding : 20px;
  `; 

const SingleCard = styled.View`
width : 100%;
height : 170px;
border-radius: 10px;
background-color: #fff;
box-shadow: 2px 3px 2px;
`;

const AnimalCardPicture = styled.View`
margin-top : 25px;
margin-left : 25px;
width : 120px;
height : 120px;
border-radius: 70%;
background-color: black;
`;

const AnimalCardDescription = styled.View`
`;