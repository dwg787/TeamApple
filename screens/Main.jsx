import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import { getDetail } from "../api";

export default function Main() {
  const { navigate } = useNavigation();

  const { isLoading, data, error } = useQuery(["animal"], getDetail);

  if (!isLoading) {
    const detailData = data.response.body.items.item;
    return (
      <View>
        {detailData.map((item) => (
          <TouchableOpacity
            key={item.desertionNo}
            onPress={() =>
              navigate("Detail", {
                params: { data: item },
              })
            }
          >
            <Text>{item.desertionNo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
