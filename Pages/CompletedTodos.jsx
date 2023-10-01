import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Todo from '../components/Todo';

const CompletedTodos = () => {
  
  const {todos} = useSelector(state => state.todos);


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {todos.length ? (
        <>
      {todos.map(todo =>{ 
      if(todo.done) return <Todo key={todo.id} todo={todo} />
      })}
        </>
      ): <Text>No Todos Found!</Text>}
    </View>
  )
}

export default CompletedTodos

