import React from "react";
import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";
import AppButton from '../components/AppButton'
import colors from "../config/colors"

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't need</Text>
      </View>
      <AppButton title={"Login"}/>
       <AppButton color={"secondary"} title={"Register"}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,

  },
  logoContainer:{
    position: "absolute",
    top: 70,
    alignItems:"center"
  }
});
