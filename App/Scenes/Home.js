import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as api from '../Api';
import { Colors, Metrics, Images, ApplicationStyles, Fonts } from '../Themes';

export default class Home extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      movie: ''
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.quiz}>
          <Text>Your movie name is </Text>
          <Text style={styles.movie}>{this.props.movie}</Text>
        </View>
        <View style={styles.chat}>

        </View>
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
  movie: {
    fontSize: Fonts.size.h3,
    color: Colors.primary
  },
  quiz: {
    flex: 0.15,
    width: '100%',
    marginTop: Metrics.doubleBaseMargin,
    alignItems: 'center',
    borderBottomWidth: 1
  },
  chat: {
    flex: 0.85
  }
});
