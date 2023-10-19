import { View, Text, Pressable } from "react-native";
import { styles, styleConcat } from './styles'
import { TextLabelInput, Button } from './MyComponents'

export default function Login(props) {
    return (
        <View style={styleConcat(styles.container, {display: "flex", justifyContent: "space-between"})}>
            <View style={{gap: "15px"}}>
                <TextLabelInput title="Nome:"/>
                <View style={{gap: "20px", display: "flex", flexDirection: "row"}}>
                    <TextLabelInput title="Idade:" inputMode="numeric"/>
                    <TextLabelInput title="Sexo:"/>
                </View>
                <TextLabelInput title="Email:" keyboardType="email-address"/>
                <TextLabelInput title="Senha:" secureTextEntry={true}/>
                <TextLabelInput title="Confirma senha:" secureTextEntry={true}/>
            </View>
            <View>
                <Button title="Cadastrar" onPress={() => props.navigation.navigate("Usuarios")}/>
                <Button title="Cancelar" onPress={() => props.navigation.navigate("Login")} style={{borderWidth: 0, background: ""}}/>
            </View>
        </View>
    );
}