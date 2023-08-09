import { Image, StyleSheet } from "react-native";

export default function ImageContainer({ BackImg }) {
  return <Image source={BackImg} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
