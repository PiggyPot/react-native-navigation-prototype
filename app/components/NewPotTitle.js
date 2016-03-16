'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

class NewPotTitle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <View style={styles.scene}>
        <Text>New Pot Title</Text>
        <TextInput
          style={styles.titleInput}
          value={this.state.title}
          onChangeText={
            (value) => this.setState({title: value})
          }
        />
        <TouchableHighlight
          onPress={
            () => this.setState({title: 'Yer Ma'})
          }
        >
          <Text>Yer Ma</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={
            () => this.props.navigator.push(
              {
                name: 'NewPotTransactions',
                title: `Saving for ${this.state.title}`
              })
            }
        >
            <Text>Confirm Your Savings Plan</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: 'white'
  },
  titleInput: {
    borderColor: 'black',
    width: 200,
    height: 40
  }
});

export default NewPotTitle;
