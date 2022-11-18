import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Mine() {
    return (
        <View style={styles.container}>
            <Text>Mine</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
