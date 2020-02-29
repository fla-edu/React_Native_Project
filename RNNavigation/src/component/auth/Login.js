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
import styled from 'styled-components';
import {IMAGE} from '../../constants/Image';
import {TextInput} from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';
import Modal from 'react-native-modal';

const {width: WIDTH} = Dimensions.get('window');

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
      email: '',
      password: '',
      isAuthenticated: false,
      isModalVisible: false,
    };
  }

  showPass = () => {
    return !this.state.press
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  };

  login = async () => {
    const {email, password} = this.state;
    //this.toggleModal();

    if(email == '' || password == ''){
      alert('Email ou Senha Inválido!');
      return;
    }
    
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      this.setState({isAuthenticated: true});
      this.props.navigation.navigate('app');
    } catch (err) {
      this.setState({isAuthenticated: false});
      console.log(err);
      alert('Email ou Senha Inválido!');
    }
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
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
              placeholder={'Email'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid="transparent"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
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
              value={this.state.password}
              onChangeText={password => this.setState({password})}
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

          <TouchableOpacity style={styles.btnLogin} onPress={this.login}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>

          <Modal
            style={styles.modal}
            isVisible={this.state.isModalVisible}
            animationType={'slide'}
            transparent={true}
            onRequestClose={() => {
              this.toggleModal();
            }}>
            <Text style={styles.textTopModal}>Login Inválido</Text>
            <Text style={styles.textModal}>Email ou Senha Incorretos</Text>
            {/* <Button
                onPress={this.toggleModal}> 
              <Text>Clique Para Fechar o Modal</Text>
            </Button> */}
          </Modal>
        </ImageBackground>
      </View>
    );
  }
}

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

const ButtonView = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;

const Modala = styled.View`
  position: absolute;
  width: 335px;
  height: 370px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`

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
  wrongPassword: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.8,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    // flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#00ff00',
    // padding: 100,
    // width: '90%',
    // height: '50%',
    flex: 0.3,
    // width: WIDTH - 55,
    // height: 45,
    borderRadius: 20,
    backgroundColor: 'white',
    // shadowOffset:{  width: 10,  height: 10,  },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textModal: {
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnModal: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#0a1426',
    justifyContent: 'center',
    marginTop: 10,
  },
  textTopModal: {
    color: '#0a1426',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
