import { View, Text } from 'react-native'
import React from 'react'
import Todo from './Todo';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <View>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </View>
  )
}

export default Todos;