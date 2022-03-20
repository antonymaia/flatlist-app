import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const DATA = {
  nome: 'Monaco',
  escalacao: [
      {
        id: 1,
        nome: 'Ben Yedder',
        foto: require('./assets/images/2294.png'),
        numero: 10,
        posicao: 'ATA',
        participacoes: '20/30',
      },
      {
        id: 2,
        nome: 'Aleksandr Golovin',
        foto: require('./assets/images/15633.png'),
        numero: 17,
        posicao: 'MA',
        participacoes: '15/30',
      },
      {
        id: 3,
        nome: 'Jean Lucas',
        foto: require('./assets/images/57631.png'),
        numero: 11,
        posicao: 'MC',
        participacoes: '12/30',
      },
      {
        id: 4,
        nome: 'Youssouf Fofana',
        foto: require('./assets/images/60602.png'),
        numero: 22,
        posicao: 'MC',
        participacoes: '25/30',
      },
      {
        id: 5,
        nome: 'Gelson Martins',
        foto: require('./assets/images/37893.png'),
        numero: 7,
        posicao: 'MD',
        participacoes: '5/30',
      },
      {
        id: 6,
        nome: 'Aurélien Tchouméni',
        foto: require('./assets/images/56328.png'),
        numero: 8,
        posicao: 'MC',
        participacoes: '16/30',
      },
      {
        id: 7,
        nome: 'Caio Henrique',
        foto: require('./assets/images/47102.png'),
        numero: 12,
        posicao: 'LE',
        participacoes: '25/30',
      },
      {
        id: 8,
        nome: 'Benoit Badiashile',
        foto: require('./assets/images/61974.png'),
        numero: 5,
        posicao: 'ZC',
        participacoes: '16/30',
      },
      {
        id: 9,
        nome: 'Axel Disasi',
        foto: require('./assets/images/60112.png'),
        numero: 6,
        posicao: 'ZC',
        participacoes: '20/30',
      },
      {
        id: 10,
        nome: 'Ruben Aguilar',
        foto: require('./assets/images/50384.png'),
        numero: 26,
        posicao: 'LD',
        participacoes: '16/30',
      },
      {
        id: 11,
        nome: 'Alexander Nubel',
        foto: require('./assets/images/41824.png'),
        numero: 16,
        posicao: 'GO',
        participacoes: '16/30',
      },
    ]
  };

const Item = ({foto, nome, numero, posicao, participacoes}) => (
  <View style={styles.itemContainer}>
    <View style={styles.imgContainer}>
      <Image source={foto} style={styles.imgItem}/>
    </View>
    <View style={styles.informacoesContainer}>
      <Text style={[styles.textInformacao, styles.textNome]}>{nome}</Text>
      <Text style={styles.textInformacao}>{'Número: '+numero}</Text>
      <Text style={styles.textInformacao}>{'Posição: '+posicao}</Text>
      <Text style={styles.textInformacao}>{'Participações: '+participacoes}</Text>
    </View>
  </View>
);

export default function App() {
  const renderItem = ({item}) => (
    <Item
      foto={item.foto}
      nome={item.nome}
      numero={item.numero}
      posicao={item.posicao}
      participacoes={item.participacoes}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerEscudo}>
        <Image style={styles.imgEscudo} source={require('./assets/images/monaco-icon.png')}/>
        <Text style={styles.textNomeTime}>{DATA.nome}</Text>
      </View>
      <FlatList
        data={DATA.escalacao}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a373e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerEscudo:{
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgEscudo:{
    height: 90,
    resizeMode: 'contain'
  },
  textNomeTime:{
    fontSize: 18,
    color: '#dadada'
  },
  itemContainer:{
    width: 350,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#515f6d',
    flexDirection: 'row'
  },
  imgContainer:{
    justifyContent: 'center',
    padding: 10
  },
  imgItem:{
    width: 80,
    height: 80
  },
  informacoesContainer:{
    justifyContent: 'center'
  },
  textNome:{
    fontWeight: '600'
  },
  textInformacao:{
    padding: 0.5,
    fontSize: 16,
    letterSpacing: 0.5,
    color: '#dadada'
  }
});
