/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';
export const App = () => {
  return (
    <PaperProvider settings={{
      icon: (props) => <IonIcon { ...props}/>,
    }}>
    <SafeAreaView style={{ flex:1 }}>
      {/* <HelloWorldScreen name = 'Gerson Trujillo'/> */}
      <HomeworkScreen/>
    </SafeAreaView>
    </PaperProvider>
  );
};
