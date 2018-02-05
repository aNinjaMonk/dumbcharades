import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import * as api from '../Api';
import { Colors, Metrics, Images, ApplicationStyles, Fonts } from '../Themes';
const navigatorStyle = {
  navBarHidden: true,
  navBarBackgroundColor: Colors.darkPrimary,
  navBarTextColor: Colors.snow,
  navBarButtonColor: Colors.snow
};

export default class App extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    };

  }

  componentWillMount() {
    api.init();
    this.getLogin();
  }

  getLogin = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      if (data) {
        api.login(data.accessToken.toString()).then((user) => {
          api.getUser(user.providerData[0].uid).then((snapshot) => {
            if (snapshot.val() == null) {
              const newUser = {
                points: 0,
                fbId: user.providerData[0].uid
              };
              api.saveUser(Object.assign({}, newUser));
              this.setState({
                user: newUser
              });
            } else {
              this.setState({
                user: snapshot.val()
              });
            }
            this.home();
          });
        }).catch((error1) => { console.log(error1); });
      }
    });
  }

  login = (error, result) => {
    if (error) {
        console.log(error);
    } else if (!result.isCancelled) {
        this.getLogin();
    }
  }

  logout = () => {
    api.logout();
  }

  home = () => {
    this.props.navigator.resetTo({
      screen: 'home',
      navigatorStyle,
      passProps: {
        user: this.state.user
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appname}>Dumb Charades</Text>
        <LoginButton
          onLoginFinished={this.login}
          onLogoutFinished={this.logout}
          readPermissions={['email', 'public_profile', 'user_friends']}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  appname: {
    fontSize: Fonts.size.h2,
    color: Colors.black,
    marginBottom: Metrics.doubleSection
  }
});
