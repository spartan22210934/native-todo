import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
// ✅ Create the client (make sure the env variable is set in app.config.js or .env)

export default function RootLayout() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://5000/api/todos") // change this based on your device
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
   
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
  
  );
}
