import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TextFont from "../../components/Text";

import Header from "../Home/components/header";
import Main from "../Home/components/main";
import Button from "./components/button";
import Itens from "./components/itens";

const Home = ({ top, main, itens }) => {
  return (
    <>
      <FlatList
        data={itens.list}
        renderItem={Itens}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...top} />
              <View style={styles.container}>
                <Main {...main} />
                <Button {...main} />
                <TextFont style={styles.title}>{itens.title}</TextFont>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Home;
