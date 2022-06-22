import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MMKV, useMMKV, useMMKVString } from "react-native-mmkv";

export default function App() {
  ``;
  const defaultStorage = useMMKV();
  const otherStorage = useMMKV({ id: "test" });
  const [isOtherStorage, setOtherStorage] = useState(false);
  const [data, setData] = useMMKVString(
    "data",
    isOtherStorage ? otherStorage : defaultStorage
  );
  const [dataKey, setDataKey] = useMMKVString(
    isOtherStorage ? "dataWithKey" : "dataWithoutKey"
  );

  return (
    <View style={styles.container}>
      <Button
        title="Clear"
        color={"red"}
        onPress={(_) => {
          otherStorage.clearAll();
          defaultStorage.clearAll();
        }}
      />
      <Button
        title="Toggle storage"
        onPress={(_) => {
          setOtherStorage((v) => !v);
        }}
      />
      <Button
        onPress={(_) => {
          setData((v) => Date.now().toString());
          setDataKey((v) => Date.now().toString());
        }}
        title="Set data"
      />

      <Text>{`Storage : ${isOtherStorage ? "test" : "default"}`}</Text>
      <Text>{`data with storage : ${data}`}</Text>
      <Text>{`data with key : ${dataKey}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
