import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'

const Estilo = {
  estiloImagem: {
    width: 100,
    height: 100
  }
}

const gerarFrase = function (){
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio*5)
  Alert.alert(numeroAleatorio)
}
const App = () => {
  const {estiloImagem} = Estilo
  return (
    <View>
      <Image source={require("./img/logo.png")} style={estiloImagem} />
      <TouchableOpacity style={} onPress={gerarFrase}>
        <Text>Gerar Frase</Text>
      </TouchableOpacity>
    </View>
  )
}

AppRegistry.registerComponent('app2', () => App)