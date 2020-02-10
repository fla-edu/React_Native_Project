import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import {CustomHeader} from '../CustomHeader.js';

export class FeedDetail extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <CustomHeader title="Feed Detail" navigation={this.props.navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Feed Detail Screen</Text>
        </View>
      </View>
    );
  }
}
