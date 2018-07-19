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
    width: 200,
    height: 200
  },
  imagem:{
    flex: 1
  },
  estiloBotao:{
    backgroundColor: 'white',
    shadowColor:'grey',
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    shadowOffset: {width:0,height:0.5}
  },
  estiloView:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const gerarFrase = function (){
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio*10)
  Alert.alert(`${numeroAleatorio}`)
}
const App = () => {
  const {estiloImagem, estiloBotao, estiloView} = Estilo
  return (
    <View style={estiloView}>
      <Image source={require("./img/logo.png")} style={estiloImagem} />
      <TouchableOpacity style={estiloBotao} onPress={gerarFrase}>
        <Text>Gerar Frase</Text>
      </TouchableOpacity>
    </View>
  )
}

AppRegistry.registerComponent('app2', () => App)