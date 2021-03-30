import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Body, Container, Content, Text, Header } from "native-base";

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsReady(true);
    })();
  }, []);
  if (!isReady) {
    return <Text>Loading....</Text>;
  }
  return (
    <Container>
      <Header>
        <Body>
          <Text>Home TOdo</Text>
        </Body>
      </Header>
      <Content>
        <Text>Home Tofo 2</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
