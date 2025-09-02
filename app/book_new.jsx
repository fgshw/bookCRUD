import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { router } from "expo-router";

const BookNew = () => {
  // state สำหรับเก็บค่าฟอร์ม
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const handleCreate = async () => {
    if (!title || !author) {
      Alert.alert("Validation Error", "กรุณากรอก Title และ Author อย่างน้อย");
      return;
    }

    const bookData = {
      title,
      author,
      description,
      genre,
      year: parseInt(year, 10),
      price: parseFloat(price),
      available: true,
    };

    try {
      const response = await fetch("http://172.20.10.3:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        Alert.alert("Success", "Book created successfully!");
        router.push("/book"); // กลับไปหน้า list
      } else {
        Alert.alert("Error", "Failed to create book.");
      }
    } catch (error) {
      console.error("Error creating book:", error);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Book</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={year}
        onChangeText={setYear}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Button title="Create Book" onPress={handleCreate} />
    </View>
  );
};

export default BookNew;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
});
