import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';

export default function LittleLemonBodyTop() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Litle lemon</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Text style={styles.smallTitle}>Chicago</Text>
          <Text style={styles.texto}>
            We are a family owned, Mediterranean restaurant, focus on tradtional
            recipes, served with a modern twist
          </Text>
        </View>
        <View style={styles.rightColumn}>
          <Image
            source={require('../img/greek-salad.png')}
            style={styles.image}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  principalcontainer: {
    backgroundColor: 'lightgray',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'left',
    paddingLeft: 16,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: 'yellow',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingBottom: 16,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  smallTitle: {
    fontSize: 36,
    color: 'white',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    color: 'white',
  },
});
