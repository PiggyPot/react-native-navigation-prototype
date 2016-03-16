'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.scene}>
        <Text>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: 'white'
  }
});

export default Login;
