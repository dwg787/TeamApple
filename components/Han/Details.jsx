import styled from "@emotion/native";
import DropShadow from "react-native-drop-shadow";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils";
import Item from "./Item";

export default function Details() {
  return (
    <>
      <ScrollWrap>
        <DetailImage
          source={{
            url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png",
          }}
        />
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
          <Item />
        </DropShadow>
      </ScrollWrap>
    </>
  );
}

const ScrollWrap = styled.View`
  padding: 5%;
`;

const DetailImage = styled.Image`
  height: ${SCREEN_HEIGHT / 3 + "px"};
  width: ${SCREEN_WIDTH};
  border-radius: 10%;
  margin-bottom: 5%;
`;
