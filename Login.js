import { View, Text, Pressable } from "react-native";
import { styles, styleConcat } from './styles'
import { TextLabelInput, Button } from './MyComponents'

export default function Login(props) {
    return (
        <View style={styleConcat(styles.container, {display: "flex", justifyContent: "space-between"})}>
            <View style={{gap: "30px"}}>
                <Text style={{fontSize: "5em", marginTop: "50px", marginBottom: "20px", textAlign: "center"}}>Login</Text>

                <TextLabelInput title="Email:" keyboardType="email-address"/>
                <TextLabelInput title="Senha:" secureTextEntry={true}/>
            </View>
            <View>
                <Button title="Login" onPress={() => props.navigation.navigate("Usuarios")}/>
                <Button title="Cadastrar" onPress={() => props.navigation.navigate("Cadastro")} style={{borderWidth: 0, background: ""}}/>
            </View>
        </View>
    );
}