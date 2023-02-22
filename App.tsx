import auth from "@react-native-firebase/auth";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  function handleSignIn() {
    auth()
      .signInWithEmailAndPassword("erikdesouzagf@gmail.com", "123456")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Entrar" onPress={handleSignIn} />
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
