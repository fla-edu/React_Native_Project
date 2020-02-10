import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';
import {CustomHeader} from '../CustomHeader.js';

export class Search extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <CustomHeader
          title="Search"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Search Screen</Text>
          <Button
            light
            onPress={() => this.props.navigation.navigate('SearchDetails')}>
            <Text>Go to Search Detail</Text>
          </Button>
        </View>
      </View>
    );
  }
}
