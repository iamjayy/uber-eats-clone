import * as React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://static4.depositphotos.com/1015060/494/i/600/depositphotos_4947647-stock-photo-restaurant.jpg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "A farmhouse restaurant in the heart of the city";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginHorizontal: 15,
      marginTop: 10,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      marginHorizontal: 15,
      marginTop: 10,
      fontWeight: "400",
    }}
  >
    {props.description}
  </Text>
);
