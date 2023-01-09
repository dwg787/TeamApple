import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import { getDetail } from "../api";

export default function Main() {
  const { navigate } = useNavigation();

  const { isLoading, data, error } = useQuery(["animal"], getDetail);

  if (!isLoading) {
    const detailData = data.response.body.items.item;
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigate("Detail", {
            params: { data: detailData },
          })
        }
      >
        <Text>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigate("Detail", {
            params: { data: detailData },
          })
        }
      >
        <Text>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigate("Detail", {
            params: { data: detailData },
          })
        }
      >
        <Text>Main</Text>
      </TouchableOpacity>
    </View>
  );
}
