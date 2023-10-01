// import React, { useState } from 'react';
// import { View, FlatList, Button, Touchable } from 'react-native';
// import CompletedTodos from '../components/CompletedTodos';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Remove from '../Pages/Remove.jsx';

// const Remove = ({ todo, removeItemValue}) => {
//   const [completedTodos, setCompletedTodos] = useState([]);

//   const removeTodo = (id) => {
//     setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
//   };

//   return (
// //     <View>
// //       <TouchableOpacity title="Go Back" onPress={() => navigation.goBack()} />
// //       <FlatList
// //         data={completedTodos}
// //         renderItem={({ item }) => (
// //           <CompletedTodos todo={item} removeTodo={removeTodo} />
// //         )}
// //         keyExtractor={(item) => item.id.toString()}
// //       />
// //     </View>
// //   );
// // };
// <View>
//   <TouchableOpacity
//   style={styles.Remove}
//   onPress={()=> removeItemValue(todo.id)}>
//   <Text> Remove</Text>
//   </TouchableOpacity>
// </View>
// );
// };
// const styles = StyleSheet.create({
//   Remove: {
    
//     padding: 10,
//     backgroundColor: '#fff',
//   },
// });

// export default Remove;