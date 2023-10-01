import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Todos from "../components/Todos";
import { useDispatch,useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addTodo } from "../Redux/Slices/Todo.slice";

const Home = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const todos = useSelector((state)=> state.todos.todos)

  const dispatch = useDispatch();

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    const soreTodos = await AsyncStorage.getItem("todos");
    if (soreTodos) {
      const arr = JSON.parse(soreTodos)
      arr.forEach(todo => {
        dispatch(addTodo(todo))
      });
  };}

  const createTodo = async () => {
    dispatch(addTodo({ title, description ,done:false}));
    storeData([...todos,{ title, description }])
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
      }}
    >
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        onChangeText={(value) => setTitle(value)}
        style={styles.input}
        placeholder="Enter Your Todo"
      />
      <TextInput
        onChangeText={(value) => setDescription(value)}
        style={styles.input}
        placeholder="Description"
      />
      <TouchableOpacity style={styles.button} onPress={createTodo}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Save</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <Todos />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 25,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: 300,
  },
  button: {
    padding: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 40,
  },
  divider: {
    width: "95%",
    height: 1,
    backgroundColor: "gray",
    marginVertical: 20,
  },
});


export const storeData = async (data) => {
  try {
    await AsyncStorage.setItem( "todos",JSON.stringify(data));
  } catch (error) {
    console.error(error)
  }
};

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('todos');
    if (value !== null) {
        return JSON.parse(value) 
    }
  } catch (error) {
  console.error(error)
  }
};
export default Home;
