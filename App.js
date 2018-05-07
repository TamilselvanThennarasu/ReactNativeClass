import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ContactList, Layout } from './components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome React Native</Text>
        <Layout/>
        <ContactList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});