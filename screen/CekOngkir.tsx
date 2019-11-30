import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import {getProvince, getCity} from "./../shared/services/raja-ongkir"
import { Props } from '../shared/interfaces/Props';
import { State } from '../shared/interfaces/State';

export default class CekOngkir extends Component<Props, State> {

    constructor(props:any) {
        super(props);

        this.state = {
            loaded_province : false,
            loaded_city : false,
            loaded_courier : false,
            province: null,
            city: null
        }
    }

    componentWillMount() {
        this.loadedProvince();
        this.loadedCity();
    }

    loadedProvince() {
        getProvince().then(function (res) {
            this.setState({province : res.data.rajaongkir.results});
            this.setState({ loaded_province: true });
        }
        .bind(this)) 
        .catch(function (error) {
            console.log(error);
        });
    }

    loadedCity() {
        getCity().then(function (res) {
            this.setState({city: res.data.rajaongkir.results});
            this.setState({ loaded_city: true });
        }
        .bind(this)) 
        .catch(function (error) {
            console.log(error);
        });
    }

    renderProvince() {
        if(this.state.loaded_province) 
            return JSON.stringify(this.state.province);
        
        return null
    }

    renderCity() {
        if(this.state.loaded_city) 
            return JSON.stringify(this.state.city);
            
        return null
    }

    render() {

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView  style={styles.scrollView}>
                    <Text>Cek Ongkir Screen </Text>

                    <Text></Text>
                    <Text>Province</Text>
                    {
                        this.state.loaded_province? ( <Text>{this.renderProvince()}</Text>): (<Text></Text>)
                    }

                    <Text></Text>
                    <Text>City</Text>
                    <Text>{this.renderCity()}</Text>

                </ScrollView >
            </SafeAreaView>
            
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });