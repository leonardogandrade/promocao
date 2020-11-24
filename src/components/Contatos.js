import React,{useState,useEffect} from 'react';
import {StatusBar,
        ScrollView,
        Image,
        View,
        StyleSheet,
        Text,
        TouchableOpacity,
        Linking,
        SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../services/api';

export default function Contatos(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        async function loadData(){
            const response = await api.get('/usuario');
            setData(response.data);
        }
        loadData();
    },[]);

    return(
        <>
            <StatusBar barStyle='light-content'/>
            <ScrollView contentInsetAdjustmentBehavior='automatic'>
                <SafeAreaView style={styles.mainScreen}>
                    {data.map(d =>(
                        <View key={d._id} style={styles.card}>
                            <View>
                                <Image source={{uri : `${d.avatar}`}} style={styles.imageCard}/>
                            </View>
                            <View style={styles.detalhes}>
                                <Text style={styles.titulo}>{d.nome}</Text>
                                <Text>{d.cargo}</Text>
                                <TouchableOpacity
                                  onPress={Linking.openURL(`tel:${d.phone}`)}
                                  style={styles.detalhesButton}>
                                  <Icon name='phone' size={28} color='#ffffff'/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    mainScreen : {
        display : 'flex',
        alignItems : 'center'
    },
    card : {
        display : 'flex',
        alignItems : 'center',
        alignContent : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        color : 'black',
        backgroundColor : '#ffffff',
        height : 110,
        width : 340,
        margin : 5,
        borderRadius : 5,
    },
    detalhes : {
        marginRight : 10,
    },
    titulo : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    imageCard : {
        height : 90,
        width : 90,
        borderRadius : 5,
        marginLeft : 5,
    },
    detalhesButton : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 30,
        width : 150,
        borderRadius : 3,
        backgroundColor : 'green',
        marginTop : 10,
    },
    detalhesTexto : {
        alignContent : 'center',
        alignItems : 'center',
        color : '#ffffff',
    }
})