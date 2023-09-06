import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { themeColor } from "../theme/theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function Signup(props) {
  return (
    <View style={{ flex: 1, backgroundColor: themeColor.bg }}>
      <SafeAreaView style={{ display: "flex" }}>
        <View style={{ display: "flex" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                backgroundColor: themeColor.color,
                padding: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <ArrowLeftIcon size={20} color={"black"} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Image
              source={require("../assets/images/signup.png")}
              style={{ height: 150, width: 150 }}
            />
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          marginTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}
      >
        <View style={{ marginTop: 30 }}>
          <View>
            <Text>UserName</Text>
            <TextInput
              placeholder="John Doe"
              style={{
                paddingVertical: 15,
                backgroundColor: "#f5f5f5",
                borderRadius: 30,
                paddingHorizontal: 20,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <Text>Email Address</Text>
            <TextInput
              placeholder="vinaydeveloper@gmail.com"
              style={{
                paddingVertical: 15,
                backgroundColor: "#f5f5f5",
                borderRadius: 30,
                paddingHorizontal: 20,
                marginTop: 10,
              }}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>Password</Text>
            <TextInput
              placeholder="Enter Password"
              secureTextEntry
              style={{
                paddingVertical: 15,
                backgroundColor: "#f5f5f5",
                borderRadius: 30,
                paddingHorizontal: 20,
                marginTop: 10,
              }}
            />
          </View>
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "rgb(250, 204, 21)",
                paddingVertical: 18,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            >
              Or
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#f5f5f5",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Image source={require("../assets/icons/apple.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#f5f5f5",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Image source={require("../assets/icons/facebook.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#f5f5f5",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Image source={require("../assets/icons/google.png")} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Already have an account?</Text>
            <TouchableOpacity
              onPressIn={() => props.navigation.navigate("Login")}
              style={{ marginLeft: 5 }}
            >
              <Text style={{ fontWeight: "bold", color: themeColor.color }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
