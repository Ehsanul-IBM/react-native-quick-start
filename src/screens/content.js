import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Example } from '@components';

const Render = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight
        onPress={() => navigation.navigate('Auth')}
        accessibilityRole={'touchable'}>
        <Example />
      </TouchableHighlight>
    </View>
  );
};

export default Render;
