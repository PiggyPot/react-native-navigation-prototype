'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class ConnectCard extends Component {
  render() {
    return (
      <View style={styles.scene}>
        <Text>Connect Card</Text>
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

export default ConnectCard;
