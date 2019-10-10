import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogId = navigation.getParam("id");

  const blogPost = state.find(blogPost => {
    return blogPost.id === blogId;
  });

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Edit Post"
        onPress={() => {
          editBlogPost(blogPost.id, title, content, () => {
            navigation.pop();
          });
        }}
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

export default EditScreen;
