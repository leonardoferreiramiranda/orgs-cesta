import React from "react";
import { Text, StyleSheet } from "react-native";

const TextFont = ({ children, style }) => {
  let sty = styles.text;

  if (style?.fontWeight === "bold") {
    sty = styles.textBold;
  }

  return <Text style={[style, sty]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});

export default TextFont;
