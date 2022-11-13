import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

const displaySpinner = () => {
  return (
    <SafeAreaView style={styles.activityContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" barStyle="light-content" />
      <WebView
        style={styles.container}
        bounces={false}
        startInLoadingState={true}
        renderLoading={displaySpinner}
        source={{ uri: "https://devmelaui.gauribaba.com/" }}
        showsHorizontalScrollIndicator={false}
        scalesPageToFit
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});
