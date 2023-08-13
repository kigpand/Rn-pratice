import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageContainer from "./components/ImageContainer";
import ButtonContainer from "./components/ButtonContainer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "./components/IconButton";
import CircleButton from "./components/CircleButton";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";

const BackImg = require("./assets/normal.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showApp, setShowApp] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // 이미지 불러올때 편집할지 안할지 여부
      allowsEditing: true,
      // 품질
      quality: 0,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowApp(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageContainer BackImg={BackImg} selectedImage={selectedImage} />
        {pickedEmoji !== null && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showApp ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footContainer}>
          <ButtonContainer
            theme={"primary"}
            label={"on Image"}
            onPress={pickImageAsync}
          />
          <ButtonContainer label={"test2"} onPress={() => setShowApp(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  footContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
