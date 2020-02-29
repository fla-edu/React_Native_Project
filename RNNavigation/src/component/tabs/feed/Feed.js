import React from 'react';
import {View, BackHandler} from 'react-native';
import {Button, Text} from 'native-base';
import {CustomHeader} from '../CustomHeader.js';

export class Feed extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    alert('Back button is pressed');
    //this.props.navigation.navigate('auth')
    return false;
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <CustomHeader
          title="Feed"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Feed Screen</Text>
          <Button
            light
            //onRequestClose={() => this.props.navigation.navigate('auth')}
            
            onPress={() => this.props.navigation.navigate('FeedDetails')}>
            <Text>Go to Feed Detail</Text>
          </Button>
        </View>
      </View>
    );
  }
}
