
// App.js
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Produtos from './components/Produtos';
import Servicos from './components/Servicos';
import Contato from './components/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Blazed': require('./assets/fonts/Blazed.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="auto" />
      </SafeAreaView>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Produtos') {
                iconName = 'home';
              } else if (route.name === 'Servicos') {
                iconName = 'list';
              } else if (route.name === 'Contato') {
                iconName = 'call';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: '#d0f0c0' },
            headerStyle: { backgroundColor: '#d0f0c0' },
            headerTitleStyle: {
              fontFamily: 'Blazed',
              fontSize: 24,
            },
          })}
        >
          <Tab.Screen 
            name="Produtos" 
            component={Produtos} 
            options={{ title: 'Produtos' }}
          />
          <Tab.Screen 
            name="Servicos" 
            component={Servicos} 
            options={{ title: 'Serviços' }}
          />
          <Tab.Screen 
            name="Contato" 
            component={Contato} 
            options={{ title: 'Contato' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#d0f0c0', // Cor de fundo da área de segurança
  },
});
