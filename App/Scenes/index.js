import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Home from './Home';

function registerScreens() {
    Navigation.registerComponent('login', () => Login);
    Navigation.registerComponent('home', () => Home);
}

export {
  registerScreens
};
