import { StyleSheet, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <Image source={require("../../assets/logo1.png")} style={styles.logo} />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 250,
    position: "absolute",
    top: 40,
    right: 0,
    zIndex: 10,
  },
});

export default Logo;
