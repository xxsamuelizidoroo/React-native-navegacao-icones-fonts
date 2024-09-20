
// components/Contato.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contato</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Define a cor de fundo como branco
  },
  text: {
    fontFamily: 'Blazed', // Usa a fonte personalizada
    fontSize: 24,
  },
});
