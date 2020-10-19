import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.price}>{props.subTitle}</AppText>
      </View>
      <View style={styles.userContainer}>

      <ListItem title="Mosh Hamedani" subTitle="5 Listings" image={require('../assets/mosh.jpg')}/>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title:{
    fontSize:24,
    fontWeight:"500",
    
  },
  price:{
    color:colors.secondary,
    fontSize:20,
    fontWeight:"bold",
    marginVertical:10
  },
  detailsContainer:{
    padding:20,
  },
  userContainer:{
    marginVertical:40
  }
});
