import React from 'react';
import env from 'react-native-config';
import { View, TouchableHighlight, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Example } from '@components';

const Render = ({ navigation }) => {
  useFocusEffect(() => {
    console.log('Doing something on screen focus!');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight onPress={() => navigation.navigate('Content')}>
        <Example />
      </TouchableHighlight>
      <Text>Built for {env.APP_ENV}</Text>
    </View>
  );
};

export default Render;
