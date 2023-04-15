import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

import Logo from "../components/Logo";

export default function Login({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const loginHandle = () => {
    setloading(true);
    function ValidateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      Alert.alert("Error", "You have entered an invalid email address!", [
        { text: "Dismiss", onPress: () => setloading(false) },
      ]);
      return false;
    }

    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all the fields", [
        { text: "Dismiss", onPress: () => setloading(false) },
      ]);
      return;
    } else if (ValidateEmail(email)) {
      // do something
      axios
        .post("http://192.168.1.14:9999/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          //   Alert.alert(res.data.message);
          Alert.alert("Error", res.data.message, [
            { text: "Dismiss", onPress: () => setloading(false) },
          ]);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          //   Alert.alert("Error", err.response.data.message);
          Alert.alert("Error", res.data.message, [
            { text: "Dismiss", onPress: () => setloading(false) },
          ]);
        });
    } else {
      // do something
      //   Alert.alert("Error", "Invalid email or password");
      Alert.alert("Error", "Invalid email or password", [
        { text: "Dismiss", onPress: () => setloading(false) },
      ]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg1} />
      <View style={styles.bg2} />
      <Logo />
      <Text style={styles.title}>Login</Text>
      <View style={styles.loginView}>
        <TextInput
          style={styles.txtIn1}
          placeholder="Enter your email"
          onChangeText={setemail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.txtIn1}
          placeholder="Password"
          secureTextEntry
          onChangeText={setpassword}
          value={password}
        />
      </View>
      <View style={styles.loginBtnView}>
        <TouchableOpacity style={styles.loginBtn} onPress={loginHandle}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginTxt}>Login</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.regTxt}>
            Haven't sign up yet, Sign up from here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "500",
    fontSize: 32,
    marginBottom: 10,
  },
  loginView: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  txtIn1: {
    fontFamily: "400",
    minWidth: 300,
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  loginBtn: {
    backgroundColor: "#000",
    minWidth: 300,
    minHeight: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  loginTxt: {
    fontFamily: "400",
    color: "#fff",
    fontSize: 18,
  },
  regTxt: {
    fontFamily: "500",
    color: "#307dc9",
    fontSize: 12,
    marginTop: 8,
  },
  loginBtnView: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  bg1: {
    position: "absolute",
    backgroundColor: "#b3d4f5",
    width: 800,
    height: 800,
    borderRadius: 400,
    left: -400,
    top: -300,
  },
  bg2: {
    position: "absolute",
    backgroundColor: "#e6f6e6",
    width: 600,
    height: 600,
    borderRadius: 600 / 2,
    right: -250,
    bottom: -250,
  },
});
