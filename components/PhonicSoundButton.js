import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedButtonIndex: []
    }
  }
  playSound = async soundChunk => {
    console.log(soundChunk);
    var soundLink =
      'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            pressedButtonIndex: this.props.buttonIndex
          })
          this.playSound(this.props.soundChunk);
        }} 
        style = {this.state.pressedButtonIndex === this.props.buttonIndex ? styles.chunk : styles.chunkButton}>
        <Text 
          style = {this.state.pressedButtonIndex === this.props.buttonIndex ? [styles.displayText, {color: "black"}] : styles.displayText}>
          {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  },
  chunk:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'pink'
  }
});