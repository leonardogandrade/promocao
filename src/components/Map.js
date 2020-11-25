import React,{useState,useEffect} from 'react';
import {SafeAreaView,StyleSheet,View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView,{Marker} from 'react-native-maps';

export default function Map(){
    const [position,setPosition] = useState({
        lat : 0,
        lon : 0,
    });

    var gps = function(options){
        return new Promise(function (resolve,reject){
            Geolocation.getCurrentPosition(resolve,reject,options);
        });
    }

    useEffect(()=>{
        gps().then((pos) =>{
            setPosition({
                lat : pos.coords.latitude,
                lon : pos.coords.longitude,
            });
        }).catch((err)=>{
            console.log(err.message);
        });
    });

    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitude: -20.27,
                longitude: -40.30,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={mapStyle}>
              <Marker
                coordinate={{
                  latitude: position.lat,
                  longitude:  position.lon,
                }}
                title={'Ufes'}
                description={'Universidade federal do ES'}
              />
              {/* {console.log(position.la)} */}
            </MapView>
          </View>
        </SafeAreaView>
      );
    };
    
    const mapStyle = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}],
      },
    ];
    
    const styles = StyleSheet.create({
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });