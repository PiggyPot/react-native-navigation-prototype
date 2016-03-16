'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Pot extends Component {
  render() {
    return (
      <View style={styles.scene}>
        <Text>Pot</Text>
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

export default Pot;
