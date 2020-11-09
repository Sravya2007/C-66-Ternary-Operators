import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
//console.log(db["the"].chunks);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image style = {styles.imageIcon} source={{ uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png', }}/>

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
          <View>
            {this.state.chunks.map(item=>{
              return <TouchableOpacity><Text style = {styles.chunkButton}>{item}</Text></TouchableOpacity>
            })}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  chunkButton: {
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 3,
    borderRadius: 20,
    width: 100,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'purple',
    color: 'white'
  },
  imageIcon:{
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30
  }
});
