import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => {},
  error => {
    console.error('Error: ', error);
  },
);

const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, price TEXT, category TEXT, img TEXT);',
      [],
      () => {
        console.log('Created');
      },
      error => {
        console.error('Error: ', error);
      },
    );
  });
};

const insertMenuItem = (title, price, category, img) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO menu (title, price, category, img) VALUES (?, ?, ?, ?)',
      [title, price, category, img],
      (_, results) => {
        console.log('Inserted');
      },
      error => {
        console.error('Error: ', error);
      },
    );
  });
};

export {createTable, db, insertMenuItem};
