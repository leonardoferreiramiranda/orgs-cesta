import LottieView from "lottie-react-native";
import React from "react";

import { SafeAreaView, StatusBar } from "react-native";
import load from "../../assets/loading.json";

const Splash = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <LottieView autoPlay={true} source={load} />
    </SafeAreaView>
  );
};

export default Splash;
