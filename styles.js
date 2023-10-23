import { StyleSheet } from "react-native";

export function styleConcat(baseStyle, newStyle) {
    var concatenatedStyles = {};
    for (const key in baseStyle) {
        concatenatedStyles[key] = baseStyle[key];
    }
    for (const key in newStyle) {
        concatenatedStyles[key] = newStyle[key];
    }
    return concatenatedStyles;
}

export const styles = StyleSheet.create({
    container: {
        padding: "30px",
        width: "100%",
        height: "100%",
    },

    user_container: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: "10px",
        padding: "10px",
        gap: "10px",
    },

    input_container: {
        gap: "5px"
    },

    label: {
        fontWeight: "bold",
        marginLeft: "5px",
    },

    input_text: {
        width: "100%",
        height: "30px",
        backgroundColor: "white",
        paddingHorizontal: "5px",
        borderWidth: 1,
        borderColor: "rgb(203 203 203)",
        borderRadius: "5px",
    },

    large_button: {
        padding: "20px",
        borderWidth: 1,
        borderColor: "rgb(203 203 203)",
        borderRadius: "5px",
    },

    profile_image: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    },
})