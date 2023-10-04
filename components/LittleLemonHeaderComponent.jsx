import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Image src="../img/lemon-logo-header.png" />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    flex: 0.2,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
