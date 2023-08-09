import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageContainer from "./components/ImageContainer";
import ButtonContainer from "./components/ButtonContainer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const BackImg = require("./assets/normal.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // 이미지 불러올때 편집할지 안할지 여부
      allowsEditing: true,
      // 품질
      quality: 0,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageContainer BackImg={BackImg} selectedImage={selectedImage} />
      </View>
      <View style={styles.footContainer}>
        <ButtonContainer
          theme={"primary"}
          label={"on Image"}
          onPress={pickImageAsync}
        />
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
