import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './Components/Stack'

export default function App() {
  return (
    <View style={styles.container}>
       <AppStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
