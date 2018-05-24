import { Platform, StyleSheet } from "react-native";

const containerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f5fCff',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
});

export { containerStyles };