import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const MenuItems = ({filteredData}) => {
  const menuItemsToDisplay = [
    {
      id: '1',
      category: 'Main',
      title: 'Pasta',
      price: '22',
      img: '../img/pasta.png',
    },
    {
      id: '2',
      category: 'Main',
      title: 'Pizza',
      price: '20',
      img: '../img/pizza.png',
    },
    {
      id: '3',
      category: 'Main',
      title: 'Caesar',
      price: '18',
      img: '../img/caesar.png',
    },
    {
      id: '4',
      category: 'Main',
      title: 'Greek',
      price: '16',
      img: '../img/greek.png',
    },
    {
      id: '5',
      category: 'Desserts',
      title: 'Cheesecake',
      price: '10',
      img: '../img/cheesecake.png',
    },
    {
      id: '6',
      category: 'Desserts',
      title: 'Lemon pie',
      price: '5',
      img: '../img/lemonpie.png',
    },
    {
      id: '7',
      category: 'Desserts',
      title: 'Chocolate cake',
      price: '6',
      img: '../img/chocolatecake.png',
    },
    {
      id: '8',
      category: 'Desserts',
      title: 'Tiramisu',
      price: '9',
      img: '../img/tiramisu.png',
    },
    {
      id: '9',
      category: 'Desserts',
      title: 'Vanilla ice cream',
      price: '8.5',
      img: '../img/vanillaicecream.png',
    },
    {
      id: '10',
      category: 'Starters',
      title: 'Mozarella sticks',
      price: '12',
      img: '../img/mozarellastick.png',
    },
    {
      id: '11',
      category: 'Starters',
      title: 'Octopus salad',
      price: '16',
      img: '../img/octopus.png',
    },
    {
      id: '12',
      category: 'Starters',
      title: 'Salmon bites',
      price: '16',
      img: '../img/salmonbites.png',
    },
    {
      id: '13',
      category: 'Drinks',
      title: 'Whisky',
      price: '13',
      img: '../img/whisky.png',
    },
    {
      id: '14',
      category: 'Drinks',
      title: 'Coffee',
      price: '4',
      img: '../img/coffee.png',
    },
    {
      id: '15',
      category: 'Drinks',
      title: 'Beer',
      price: '4',
      img: '../img/beer.png',
    },
    {
      id: '16',
      category: 'Drinks',
      title: 'Margarita',
      price: '8',
      img: '../img/margarita.png',
    },
  ];

  return (
    <View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Image style={styles.image} source={{uri: item.img}} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  category: {},
  title: {},
  price: {},
  image: {
    height: 30,
    width: 30,
  },
});

export default MenuItems;
