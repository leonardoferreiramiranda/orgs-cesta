import React from "react";
import { Image, StyleSheet, View } from "react-native";

import TextFont from "../../../components/Text";

const Itens = ({ item: { name, image } }) => {
  return (
    <View style={styles.itens}>
      <Image source={image} style={styles.image} />
      <TextFont style={styles.name}>{name}</TextFont>
    </View>
  );
};

const styles = StyleSheet.create({
  itens: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 20,
    color: "#464646",
    marginLeft: 15,
  },
});

export default Itens;
