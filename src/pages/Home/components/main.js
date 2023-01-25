import React from "react";
import { Image, View, StyleSheet } from "react-native";

import TextFont from "../../../components/Text";

const Main = ({ name, farmImage, farmName, description, price }) => {
  return (
    <>
      <TextFont style={styles.name}>{name}</TextFont>
      <View style={styles.farmContainer}>
        <Image source={farmImage} style={styles.farmImage} />
        <TextFont style={styles.farmName}>{farmName}</TextFont>
      </View>
      <TextFont style={styles.description}>{description}</TextFont>
      <TextFont style={styles.price}>{price}</TextFont>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 46,
    color: "#464646",
  },
  farmContainer: {
    flexDirection: "row",
    marginVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default Main;
