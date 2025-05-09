import {Stack} from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index"   options={{ headerShow: false }} />
        <Stack.Screen name="home"  options={{ headerShow: false }} />
       
      </Stack>
      <StatusBar style="light"/>
    </>
  )
}