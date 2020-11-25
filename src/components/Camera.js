import React,{Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class Camera extends Component{
    takePicture = async () => {
        if( this.camera ){
            const options = {quality : 0.5, base64 : true};
            const data = await this.camera.takePictureAsync(options);
            alert(data.uri);
        }
    }
    render(){
        return(
            <View
                style={styles.container}
                androidCameraPermissionOptions={{
                    title : 'Permissao para usar a camera',
                    message : 'Precisamos da sua permissao para usar a camera',
                    buttonPositive : 'Ok',
                    buttonNegative : 'Cancel'
                }}
                androidRecordAudioPermissionOptions={{
                    title : 'Permissao para usar audio',
                    message : 'Precisamos da sua permissao para usar o audio',
                    buttonPositive : 'Ok',
                    buttonNegative : 'Cancel'
                }}>
                <RNCamera
                    style={styles.camera}
                    ref={ ref => {
                        this.camera = ref
                    }}
                />
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.takePicture.bind(this)}>                        
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button : {
        flex : 0,
        backgroundColor : '#fff',
        borderRadius : 50,
        width : 60,
        margin : 20,
        alignSelf : 'center',
        paddingHorizontal : 20,
        padding : 15,
    },
    buttonArea : {
        flex : 0,
        flexDirection : 'row',
        justifyContent : 'center'
    },
    camera : {
        flex : 1,
        alignItems : 'center',
    },
    container : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'center',
    }
})