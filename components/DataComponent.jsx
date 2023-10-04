import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

export default function DataComponent({filteredData}) {
  const images = {
    '../img/pasta.png': require('../img/pasta.png'),
    '../img/pizza.png': require('../img/pizza.png'),
    '../img/caesar.png': require('../img/caesar.png'),
    '../img/greek.png': require('../img/greek.png'),
    '../img/lemonpie.png': require('../img/lemonpie.png'),
    '../img/cheesecake.png': require('../img/cheesecake.png'),
    '../img/chocolatecake.png': require('../img/chocolatecake.png'),
    '../img/tiramisu.png': require('../img/tiramisu.png'),
    '../img/vanillaicecream.png': require('../img/vanillaicecream.png'),
    '../img/mozarellastick.png': require('../img/mozarellastick.png'),
    '../img/octopus.png': require('../img/octopus.png'),
    '../img/salmonbites.png': require('../img/salmonbites.png'),
    '../img/whisky.png': require('../img/whisky.png'),
    '../img/coffee.png': require('../img/coffee.png'),
    '../img/margarita.png': require('../img/margarita.png'),
    '../img/beer.png': require('../img/beer.png'),
  };
  return (
    <View>
      {filteredData && filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.item}>{item.category}</Text>
                <Text style={styles.item}>{item.title}</Text>
                <Text style={styles.item}>{item.price}</Text>
              </View>
              <Image style={styles.img} source={images[item.img]} />
            </View>
          )}
        />
      ) : (
        <View>
          <Text>{'No hay datos'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  item: {
    width: 100,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
});
