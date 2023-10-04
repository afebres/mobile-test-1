import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DataComponent from '../components/DataComponent';
import SearchComponent from '../components/Search';
import Header from '../components/LittleLemonHeaderComponent';
import LittleLemonBodyTop from '../components/LittleLemonBodyTop';

export default function Menu() {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <View>
      <Header />
      <View style={styles.principalcontainer}>
        <LittleLemonBodyTop />
        <SearchComponent setFilteredData={setFilteredData} />
        <DataComponent filteredData={filteredData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principalcontainer: {
    backgroundColor: 'lightgray',
  },
});
