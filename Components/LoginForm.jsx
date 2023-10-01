import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login submitted:', username, password);
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,color: 'purple',textAlign: 'center' }}>[Todo App]</Text>

      <TextInput
        style={{ height: 40, borderColor: 'purple', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Todo Title:"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={{ height: 40, borderColor: 'purple', borderWidth: 1, marginBottom: 20, padding: 10 }}
        placeholder="Todo Description:"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <View style={{ backgroundColor: 'purple', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
          
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default LoginForm;