/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import { Navigation } from 'react-native-navigation';
 import { Component } from 'react';
 import { registerScreens } from './Scenes';

 registerScreens();

 class App extends Component {
   constructor(props) {
     super(props);

     this.startApp();
   }
   startApp() {
     Navigation.startSingleScreenApp({
       screen: {
         screen: 'login',
         navigatorStyle: {
           navBarHidden: true
         }
       },
       animationType: 'fade'
     });
   }
 }

 export default App;
