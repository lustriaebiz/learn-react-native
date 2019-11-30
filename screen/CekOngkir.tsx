import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/style';
import {getProvince, getCity, getCourier} from "./../shared/services/raja-ongkir"
import { Province } from "../shared/interfaces/Province";
import { City } from '../shared/interfaces/City';

// data
const province : Province[] = [];
const city : City[] = [];

export default class CekOngkir extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded_province : false,
            loaded_city : false,
            loaded_courier : false
        }
    }

    componentWillMount() {
        this.loadedProvince();
        this.loadedCity();
    }

    loadedProvince() {
        getProvince().then(function (res) {
            this.province = res.data.rajaongkir.results;
            console.log(JSON.stringify(this.province));
            
            this.setState({ loaded_province: true });
        }
        .bind(this)) 
        .catch(function (error) {
            console.log(error);
        });
    }

    loadedCity() {
        getCity().then(function (res) {
            this.city = res.data.rajaongkir.results;
            console.log(JSON.stringify(this.city));
            this.setState({ loaded_city: true });
        }
        .bind(this)) 
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {

        return(
            <View style={styles.container}>
                <Text>Cek Ongkir Screen </Text>
            </View>
        )
    }

}