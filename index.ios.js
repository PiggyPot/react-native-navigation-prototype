/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Pots from './app/components/Pots';
import Pot from './app/components/Pot';
import ConnectCard from './app/components/ConnectCard';
import NewPotTitle from './app/components/NewPotTitle';
import NewPotTransactions from './app/components/NewPotTransactions';
import Login from './app/components/Login';

const NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
      >
        <Text>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if (route.name === 'Pots') {
      return (
        <TouchableOpacity
          onPress= {
            () => navigator.push({name: 'NewPotTitle', title: 'New Pot Title'})
          }
        >
          <Text>+</Text>
        </TouchableOpacity>
      );
    }
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text>
        {route.title}
      </Text>
    );
  },

};

class navigatorTest extends Component {

  renderScene(route, nav) {
    switch(route.name) {
      case 'Pots':
        return <Pots navigator={nav} />;
      case 'Pot':
        return <Pot navigator={nav} />;
      case 'NewPotTransactions':
        return <NewPotTransactions navigator={nav} />;
      case 'NewPotTitle':
        return <NewPotTitle navigator={nav} />;
      case 'ConnectCard':
        return <ConnectCard navigator={nav} />;
      case 'Login':
        return <Login navigator={nav} />;
      default:
        return <View navigator={nav} />;
    }
  }

  render() {
    const isLoggedIn = true;
    return (
      <Navigator
        initialRoute={isLoggedIn ? {name: 'Pots', title: 'My Pots'} : {name: 'Login', title: 'Login'}}
        renderScene={this.renderScene}
        configureScene={
          (route) => {
            if (route.name === 'NewPotTitle') {
              return Navigator.SceneConfigs.FloatFromBottom;
            }

            return Navigator.SceneConfigs.FloatFromRight;
          }
        }
        navigationBar= {
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}


const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'red'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('navigatorTest', () => navigatorTest);
