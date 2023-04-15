import { Image, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Image
        source={{
          uri: "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg",
        }}
        style={{ height: 200, width: 200 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "600",
    fontSize: 32,
  },
});

export default Home;
