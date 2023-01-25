import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import TextFont from "../../../components/Text";

const Button = ({ button }) => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <TextFont style={styles.textButton}>{button}</TextFont>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 10,
  },
  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 26,
  },
});

export default Button;
