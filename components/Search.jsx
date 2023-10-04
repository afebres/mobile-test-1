import React, {useState, useEffect} from 'react';
import {SearchBar} from 'react-native-elements';
import {db, createTable, insertMenuItem} from '../database';

const SearchComponent = ({setFilteredData}) => {
  const [search, setSearch] = useState('');

  const handleSearch = text => {
    setSearch(text);
    searchMenuData(text);
  };

  const searchMenuData = text => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM menu WHERE category LIKE ? or title LIKE ? ',
        ['%' + text + '%', '%' + text + '%'],
        (_, results) => {
          const len = results.rows.length;
          const menuData = [];
          for (let i = 0; i < len; i++) {
            menuData.push(results.rows.item(i));
          }
          setFilteredData(menuData);
        },
        error => {
          console.error('Error: ', error);
        },
      );
    });
  };

  const [menuItemsCreated, setMenuItemsCreated] = useState(false);

  useEffect(() => {
    createTable();

    if (!menuItemsCreated) {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM menu LIMIT 1',
          [],
          (_, results) => {
            if (results.rows.length === 0) {
              insertMenuItem('Pasta', '22', 'Main', '../img/pasta.png');
              insertMenuItem('Pizza', '20', 'Main', '../img/pizza.png');
              insertMenuItem('Caesar', '18', 'Main', '../img/caesar.png');
              insertMenuItem('Greek', '15', 'Main', '../img/greek.png');
              insertMenuItem(
                'Cheesecake',
                '10',
                'Desserts',

                '../img/cheesecake.png',
              );
              insertMenuItem(
                'Lemon pie',
                '7',
                'Desserts',

                '../img/lemonpie.png',
              );
              insertMenuItem(
                'Chocolate cake',
                '6',
                'Desserts',

                '../img/chocolatecake.png',
              );
              insertMenuItem(
                'Tiramisu',
                '6',
                'Desserts',

                '../img/tiramisu.png',
              );
              insertMenuItem(
                'Vanilla ice cream',
                '5',
                'Desserts',

                '../img/vanillaicecream.png',
              );
              insertMenuItem(
                'Mozarella sticks',
                '10',
                'Starters',

                '../img/mozarellastick.png',
              );
              insertMenuItem(
                'Octopus salad',
                '20',
                'Starters',

                '../img/octopus.png',
              );
              insertMenuItem(
                'Salmon bites',
                '14',
                'Starters',

                '../img/salmonbites.png',
              );
              insertMenuItem(
                'Whisky',
                '12',
                'Drinks',

                '../img/whisky.png',
              );
              insertMenuItem(
                'Coffee',
                '3',
                'Drinks',

                '../img/coffee.png',
              );
              insertMenuItem(
                'Margarita',
                '8',
                'Drinks',

                '../img/margarita.png',
              );
              insertMenuItem('Beer', '2', 'Drinks', '../img/beer.png');

              setMenuItemsCreated(true);
            }
          },
          error => {
            console.error('Error: ', error);
          },
        );
      });
    }
  }, [menuItemsCreated]);

  return (
    <SearchBar
      placeholder="Search..."
      onChangeText={handleSearch}
      value={search}
    />
  );
};

export default SearchComponent;
