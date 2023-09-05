/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Header } from '../components/Header';
import { Landing } from '../features/Landing';
import { Categories } from '../features/Categories';

const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flex: 1 }}
        >
          <Header />
          <Categories />
          <Landing />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
