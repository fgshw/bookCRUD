import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch(
        "http://172.20.10.3:3000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        Alert.alert("Signup Success", `User created: ${data.user?.username}`);
      } else {
        const err = await response.json();
        Alert.alert("Signup Failed", err.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Signup</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={style.input}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email@email.com"
        keyboardType="email-address"
        style={style.input}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Password"
        style={style.input}
      />

      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Signup;

const style = StyleSheet.create({
  container: {
    marginVertical: 14,
    marginHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
});
