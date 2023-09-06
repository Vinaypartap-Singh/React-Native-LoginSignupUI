import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { themeColor } from "../theme/theme";

export default function Welcome() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColor.bg }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Let's Get Started
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: 380, height: 380 }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(250, 204, 21)",
              marginHorizontal: 50,
              paddingVertical: 18,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            >
              Signup
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Already have an account?
            </Text>
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <Text style={{ fontWeight: "bold", color: themeColor.color }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
