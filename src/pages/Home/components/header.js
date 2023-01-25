import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import TextFont from "../../../components/Text";

import top from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

const Header = ({ title }) => {
  return (
    <>
      <Image source={top} style={styles.top} />
      <TextFont style={styles.title}>{title}</TextFont>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: "MontserratBold",
    padding: 16,
    fontWeight: "bold",
  },
});
export default Header;
