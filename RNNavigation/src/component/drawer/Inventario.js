import React from 'react';
import {
  Text,
  View,
  StyleSheet,Alert,TouchableOpacity,
  Image
 }from 'react-native';
import {CustomHeader} from '../tabs/CustomHeader.js';
import { RNCamera } from 'react-native-camera';
import SoundPlayer from 'react-native-sound-player';

export class Inventario extends React.Component  {

  constructor(props) {
    super(props)

    this.state = {
      scanable: true,
    }
  }

  componentDidMount() {
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

  callback(text) {
    if (!this.state.scanable) {
      return
    }

    alert(text);
    
    try {
      SoundPlayer.playSoundFile('beep', 'mp3')
    } catch (e) {
        console.log(`cannot play the sound file`, e)
    }

    this.setState({ scanable: false })
    setTimeout(() => {
      if (this._mounted) {
        this.setState({ scanable: true })
      }
    }, 1000) // 1s cooldown
  }

  render() {
    return (

      <View style={{flex: 1}}>
        <CustomHeader title="Inventário" navigation={this.props.navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Inventário Screen</Text>
        </View>

        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={({ data }) => {
              this.callback(data)
            }}
          />
        </View>
      </View>


    );
  }


  // takePicture = async() => {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});