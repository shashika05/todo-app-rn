import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9898/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
    console.log(todos);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
