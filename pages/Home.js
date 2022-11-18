import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!使用app测试</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
