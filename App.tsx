import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {

  componentDidMount() {
    console.log('componentDidMount');
    
  }

  state = {
    picture : {
      uri : 'https://statik.tempo.co/data/2018/12/14/id_804209/804209_720.jpg'
    }
  }

  render () {
    return(
      <View style={styles.container}>
        <Text>Welcome to react native.. Ebiz</Text>
        <Image source = {this.state.picture} style = {{width:193, height:110}}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
