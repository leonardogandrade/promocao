import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {accelerometer, gyroscope, setUpdateIntervalForType, SensorTypes} from 'react-native-sensors';

export default function Sensores(){
    setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const subscription = accelerometer
    .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 20))
    .subscribe(
        speed => console.log(`You moved your phone with ${speed}`),
        error => {
        console.log("The sensor is not available");
        }
    );

    setTimeout(() => {
        subscription.unsubscribe();
    }, 1000);

    const isConnected = () =>{
        NetInfo.fetch().then(state => {
            alert(`Conexao: ${state.type} estado: ${state.isConnected}`);
        })
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={isConnected}>
                <Text style={{color : '#fff'}}>VERIFICAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 50,
    },
    button : {
        justifyContent : 'center',
        alignContent : 'center',
        width : 200,
        height : 50,
        backgroundColor : 'blue',
        borderRadius : 5,
    }
})