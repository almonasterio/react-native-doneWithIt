import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const AppCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow:"hidden"
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer:{
    padding:20,
  },
  title: { marginBottom:7},
  subTitle: {color:colors.secondary,fontWeight:"bold"},
});
