import { StatusBar, SafeAreaView } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Home from "./src/pages/Home";
import mocks from "./src/mocks/Home";
import Splash from "./src/screens/splash";

const App = () => {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <Splash />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Home {...mocks} />
    </SafeAreaView>
  );
};

export default App;
