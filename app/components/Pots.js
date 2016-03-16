'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

import potsData from '../data/pots';

class Pots extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(potsData),
    };
  }

  pressRow(potData) {
    this.props.navigator.push({
      name: 'Pot',
      potId: potData.id,
      title: `Pot: ${potData.name}`
    });
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight onPress={() => this.pressRow(rowData)}>
       <View>
         <View style={styles.row}>
           <Text style={styles.text}>
             {rowData.name}
           </Text>
         </View>
       </View>
     </TouchableHighlight>
    );
  }

  render() {
    return (
      <View>
        <ListView
          style={styles.scene}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
        <TouchableHighlight
          onPress= {
            () => this.props.navigator.push({name: 'NewPotTitle', title: 'New Pot Title'})
          }
        >
          <Text>Create Another Pot</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Pots.contextTypes = {
  pots: React.PropTypes.array
};

const styles = StyleSheet.create({
  scene: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  text: {
    flex: 1,
  }
});

export default Pots;
