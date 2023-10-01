import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTodoStatus, deleteTodo } from '../Redux/Slices/Todo.slice';
import { storeData } from "../Pages/Home";

const Todo = ({ todo }) => {
  const [checkBoxValue ,setCheckBoxValue]= useState(false)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos)
useEffect(()=>{

console.log(todos)
},[todos])
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: 300,
        minHeight: 50,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "gray",
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <Text
        onPress={() => navigation.navigate("Todo-details", todo)}
        style={{ color: "#fff" }}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <TouchableWithoutFeedback
          onPress={() =>{
             dispatch(deleteTodo({ id: todo.id }))
             storeData(todos.filter((item)=> item.id !==todo.id))
        
        }}
        >
          <FontAwesome5 name="trash" size={24} color="red" />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(changeTodoStatus({ id: todo.id,value:!checkBoxValue }))
            setCheckBoxValue(!checkBoxValue)
          
          }}
        >
         {!checkBoxValue?<FontAwesome name="circle-o" size={24} color="black" />:
          <FontAwesome name="check-circle" size={24} color="black" />}
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;
