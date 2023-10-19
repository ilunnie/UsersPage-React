// import { useState } from 'react';
// import { StyleSheet, View, Text, Image, SectionList, Pressable, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Usuarios from './Usuarios'
import Login from './Login';
import Cadastro from './Cadastro';

export default function App() {
  // const [size, setSize] = useState(100)
  // const [inicio, setInicio] = useState(false)
  // var array = [{
  //   title: "Mains dishes",
  //   data: ['Pizza', 'Burguer'],
  // }]

  // function clickSize() {
  //   if(!inicio) return
  //   setSize(size + 10);
  //   console.log("Tá Focado")
  // }

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Usuarios" component={Usuarios} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
     
    //   <NavigationContainer>
    //     <Login/>
    //     <Cadastro/>
    //   </NavigationContainer>
    //   <Switch
    //     onValueChange={() => setInicio(!inicio)}
    //     value={inicio}
    //     trackColor={{false: "#767577", true:"#81b8ff"}}
    //     thumbColor={inicio? "#f5dd4b":"#f4f3f4"}
    //   />

    //   <Pressable
    //     onPress={() => clickSize()}
    //   >
    //     <Image
    //       style = {{
    //         width:size + "px",
    //         height:size + "px"
    //       }}
    //       source = {{uri: "https://ogimg.infoglobo.com.br/in/14638550-9ee-f9a/FT1086A/20141123-125719.jpg"}}
    //     />
    //   </Pressable>

    //   <View>
    //     <SectionList
    //       sections={array}
    //       keyExtractor={(item, index) => item+index}
    //       renderItem={({item}) => (
    //         <Text style={{color:"green"}}>{item}</Text>
    //       )}
    //       renderSectionHeader={({section: {title}}) => (
    //         <Text style={{color:"red"}}>{title}</Text>
    //       )}
    //     />
    //   </View>
    // </View>
  );
}
