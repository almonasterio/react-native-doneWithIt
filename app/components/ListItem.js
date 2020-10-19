import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  title:{
    fontWeight:"bold"
  },
  subTitle:{
    color:colors.medium
  },
  titleContainer: {
    marginLeft: 10
  }
});
