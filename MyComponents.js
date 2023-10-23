import { Text, TextInput, View, Pressable, Image, Switch } from "react-native"
import { useState } from 'react';
import { styles, styleConcat } from './styles'

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

export function ProfileImage(props) {
    var style = styleConcat(styles.profile_image, props['style'] || {})
    return (
        <Image
            source={{uri: props["uri"] || "https://i.stack.imgur.com/l60Hf.png"}}
            style={style}
        />
    );
}

export function CheckInput(props) {
    const [value, setValue] = useState(props["value"] || false)
    return (
        <Switch
            onValueChange={() => setValue(!value)}
            value={value}
            trackColor={{false: props["FalseTrackColor"] || "#767577", true: props["TrueTrackColor"] || "rgb(0, 150, 136)"}}
            thumbColor={props["thumbColor"] || "#f4f3f4"}
            activeThumbColor={props["thumbColor"] || "#f4f3f4"}
        />
    );
}