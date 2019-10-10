import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
        title="Add Blog"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    fontSize: 18,
    padding: 5,
    margin: 10
  },
  label: {
    padding: 5,
    margin: 10
  }
});

export default CreateScreen;
