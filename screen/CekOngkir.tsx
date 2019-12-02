import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, Picker, View } from 'react-native';
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
        if(this.state.loaded_province) {
            
            return (
                <View>
                    <Text>Province</Text>
                    <Picker
                        // selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        // onValueChange={(itemValue, itemIndex) =>
                        //     this.setState({language: itemValue})
                        // }
                        >
                        {this.state.province.map((eventType, index) => <Picker.Item key={index} {...eventType} label={eventType.province_name} value={eventType.province_id}/>) }
                </Picker>
                </View>
            )
        }
        
        return null
    }

    renderCity() {
        if(this.state.loaded_city) {
            
            return (
                <View>
                    <Text>City</Text>
                    <Picker
                        // selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        // onValueChange={(itemValue, itemIndex) =>
                        //     this.setState({language: itemValue})
                        // }
                        >
                        {this.state.city.map((eventType, index) => <Picker.Item key={index} {...eventType} label={eventType.city_name} value={eventType.city_id}/>) }
                </Picker>
                </View>
            )
        }
        
        return null
    }

    render() {

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView  style={styles.scrollView}>
                    <Text>Cek Ongkir Screen </Text>

                    {/* render province */}
                    {this.renderProvince()}
                    
                    {/* render city */}
                    {this.renderCity()}

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
    //   backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });