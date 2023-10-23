import { View, Text, Pressable } from "react-native";
import { styles, styleConcat } from './styles'
import { TextLabelInput, Button, ProfileImage, CheckInput } from './MyComponents'
import { useState } from 'react';

export default function Login(props) {
    return (
        <View style={styleConcat(styles.container, {display: "flex", justifyContent: "space-between"})}>
            <View style={{gap: "15px"}}>
                <View style={{display: "flex", alignItems: "center", marginBottom: "-15px"}}>
                    <ProfileImage/>
                </View>
                <TextLabelInput title="Nome:"/>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <TextLabelInput title="Idade:" inputMode="numeric" style={{width: "45%"}}/>
                    <TextLabelInput title="Sexo:" style={{width: "45%"}}/>
                </View>
                <TextLabelInput title="Email:" keyboardType="email-address"/>
                <TextLabelInput title="Senha:" secureTextEntry={true}/>
                <TextLabelInput title="Confirma senha:" secureTextEntry={true}/>
                <CheckInput value={false}/>
            </View>
            <View>
                <Button title="Cadastrar" onPress={() => props.navigation.navigate("Usuarios")}/>
                <Button title="Cancelar" onPress={() => props.navigation.navigate("Login")} style={{borderWidth: 0, background: ""}}/>
            </View>
        </View>
    );
}