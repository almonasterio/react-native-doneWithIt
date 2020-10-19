import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  Alert,
  SafeAreaView,
  View,
  Dimensions,
} from "react-native";
import AppButton from './app/components/AppButton'
import AppCard from './app/components/AppCard'
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from "./app/config/colors";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return(
   <ViewImageScreen></ViewImageScreen>

    ) 
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding:20,
    paddingTop:100,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
