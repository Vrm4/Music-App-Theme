import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer.js';
import Library from './components/Library.js';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './components/Home.js';
import Search from './components/Search.js';
import Singers from './components/Singers.js';
import Listen from './components/Listen.js';
import AllSingers from './components/AllSingers.js';
import Albums from './components/Albums.js';
import Category from './components/Category.js';
import { ThemeProvider } from './components/Context.js';

export default function App() {
  
  return (

    <NativeRouter >
    <View style={styles.container}>
    <ThemeProvider>
    <Route exact  path='/library' >
      <Library />
    </Route>  
      <Route path='/search' >
        <Search />
      </Route>
      <Route exact  path='/' >
        <Home />
      </Route>
      <Route path='/singers' >
        <Singers />
      </Route>
      <Route path='/allsingers' >
      <AllSingers />
      </Route>
      <Route path='/listen' >
        <Listen /> 
      </Route>
      <Route path='/albums' >
        <Albums />
      </Route>
      <Route path='/category' >
        <Category />
      </Route>
      <Footer />
    </ThemeProvider>

    </View>
    </NativeRouter>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2639',
    
  },
});
