import React, { Component } from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';
import { Props } from '../shared/interfaces/Props';
import { styles } from '../assets/style';

export default class Home extends Component<Props> {

    render() {

        return(
        <View style={{flex:1}}>
            <ImageBackground style={styles.container} source={require('./../assets/background.png')}>
                <Button
                    onPress={() => this.props.navigation.navigate('Ongkir')}
                    title="Cek Ongkir" 
                />

                <Text></Text>
                <Text></Text>

                <Button
                    onPress={() => this.props.navigation.navigate('Emas')}
                    title="Cek Emas"
                />

            </ImageBackground>
        </View>
        )

    }

}



  