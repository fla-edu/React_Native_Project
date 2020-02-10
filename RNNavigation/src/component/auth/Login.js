import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text, Icon} from 'native-base';
import {IMAGE} from '../../constants/Image';
import {TextInput} from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window');

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    return !this.state.press
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  };

  render() {
    return (
      <View style={styles.view}>
        <ImageBackground
          source={IMAGE.BACKGROUND}
          style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={IMAGE.NFC} style={styles.logo} />
            <Text style={styles.logoText}>NFC System</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name={'ios-person'}
              size={28}
              color={'rgba(255, 255, 255, 0.7)'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name={'ios-lock'}
              size={28}
              color={'rgba(255, 255, 255, 0.7)'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry={this.state.showPass}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.btnEye}
              onPress={this.showPass.bind(this)}>
              <Icon
                name={!this.state.press ? 'ios-eye' : 'ios-eye-off'}
                size={26}
                color={'rgba(255, 255, 255, 0.7)'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => this.props.navigation.navigate('app')}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 40,
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 148,
    height: 130,
  },
  logoText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.8,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#272b36',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnRegister: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#0a1426',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});
