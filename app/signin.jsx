import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await fetch("http://172.20.10.3:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);

        // สมมติ API ส่ง token กลับมา
        Alert.alert("Login Success", `Welcome ${data.user?.username}`);
        // 👉 เก็บ token ไว้ใช้เรียก API อื่น เช่น AsyncStorage
      } else {
        const err = await response.json();
        Alert.alert("Login Failed", err.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during signin:", error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Signin</Text>

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

      <Button title="Signin" onPress={handleSignin} />
    </View>
  );
};

export default Signin;

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
