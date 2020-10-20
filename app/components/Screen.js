import React from "react";
import Constants from "expo-constants";
import { View ,SafeAreaView, StyleSheet } from "react-native";

const Screen = ({ children,style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex:1
  },
});
