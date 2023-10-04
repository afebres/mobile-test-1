import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';

export default function LittleLemonWelcome() {
  const colorScheme = useColorScheme();
  console.log('colo', colorScheme);
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? {backgroundColor: '#ffffff'}
          : {backgroundColor: '#333333'},
      ]}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../images/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text
          style={[
            styles.title,
            // eslint-disable-next-line react-native/no-inline-styles
            colorScheme === 'light' ? {color: '#333333'} : {color: '#ffffff'},
          ]}>
          Welcome to the Little Lemon
        </Text>
      </View>
      <Text style={styles.text}>
        Little Lemon is a charming neighborhood bistro that serve simple food
        and classic cocktail in a lively but casual enviroment. We would love to
        hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    flex: 0.95,
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
