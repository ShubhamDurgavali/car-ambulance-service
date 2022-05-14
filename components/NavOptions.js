import { FlatList, TouchableOpacity, Text, Image, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Get a ride!",
    image: "http://bit.ly/3sXS72D",
    screen: "Mapscreen",
  },
  {
    id: "456",
    title: "Order food!",
    image: "http://bit.ly/3sXS72D",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      style={tw`ml-5`}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain", backgroundColor: "red" }}
              source={{uri: item.image}}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
