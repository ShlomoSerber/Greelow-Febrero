import react from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Hello World!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "cyan"
    },
    title: {
        fontSize: 40
    }
})

export default App;