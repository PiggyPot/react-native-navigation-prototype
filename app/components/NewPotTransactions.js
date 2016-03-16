'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  DatePickerIOS,
  PickerIOS,
  PickerItemIOS,
  TouchableOpacity
} from 'react-native';

class NewPotTransactions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCardConnected: true,
      savingsTarget: 0,
      dateTarget: new Date(),
      interval: 'Every Month',
      intervalOptions: [
        'Every Week',
        'Every Month'
      ]
    };
  }

  onDateChange(date) {
    this.setState({dateTarget: date});
  }

  renderCTA() {
    if (this.state.isCardConnected) {
      return (
        <TouchableOpacity
          onPress= {
            () => this.props.navigator.resetTo({name: 'Pot', title: 'New Pot', id: 2})
          }
        >
          <Text>Create Pot</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        onPress= {
          () => this.props.navigator.push({name: 'ConnectCard', title: 'Connect Payment Card'})
        }
      >
        <Text>Confirm your savings plan</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.scene}>
        <TextInput
          style={styles.titleInput}
          value={this.state.title}
          keyboardType="number-pad"
          placeholder="100"
          onChangeText={
            (value) => {
              return this.setState({savingsTarget: value});
            }
          }
        />
        <DatePickerIOS
          date={this.state.dateTarget}
          mode="date"
          onDateChange={this.onDateChange.bind(this)}
        />
        <PickerIOS
          selectedValue={this.state.interval}
          onValueChange={(val) => this.setState({interval: val})}>
          {this.state.intervalOptions.map((opt) => (
            <PickerItemIOS
              key={opt}
              value={opt}
              label={opt}
            />
          ))}
        </PickerIOS>
        {this.renderCTA()}
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

export default NewPotTransactions;
