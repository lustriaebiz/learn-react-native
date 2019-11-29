import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/style';

export default class CekEmas extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View style={styles.container}>
                <Text>Cek Emas Screen</Text>
            </View>
        )
    }

}