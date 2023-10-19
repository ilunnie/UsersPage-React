import { Text, TextInput, View, Pressable } from "react-native"
import { styles } from './styles'
import { styleConcat } from './styles'

export function TextLabelInput(props) {
    var viewStyle = styleConcat(styles.input_container, props['style'] || styles.input_container)
    var labelStyle = styleConcat(styles.label, props['labelStyle'] || styles.label)
    var inputStyle = styleConcat(styles.input_text, props['inputStyle'] || styles.input_text)
    return (
        <View style={viewStyle}>
            <Text style={labelStyle}>{props['title'] || "Label"}</Text>
            <TextInput
                secureTextEntry={props['secureTextEntry'] || false}
                inputMode={props['inputMode'] || ""}
                value={props['value'] || ''}
                style={inputStyle}></TextInput>
        </View>
    );
}

export function Button(props) {
    var buttonStyle = styleConcat(styleConcat(styles.large_button, {backgroundColor: "white"}), props['style'] || {})
    var textStyle = styleConcat({textAlign: "center"}, props['textStyle'] || {})
    return (
        <Pressable
            onPress={props['onPress']}
            style={buttonStyle}
        ><Text style={textStyle}>{props['title'] || "Button"}</Text></Pressable>
    );
}