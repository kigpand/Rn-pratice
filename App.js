import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import ImageContainer from "./components/ImageContainer";
import ButtonContainer from "./components/ButtonContainer";

const BackImg = require("./assets/normal.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageContainer BackImg={BackImg} />
      </View>
      <View style={styles.footContainer}>
        <ButtonContainer theme={"primary"} label={"test"} />
        <ButtonContainer label={"test2"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 100,
  },
  footContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
