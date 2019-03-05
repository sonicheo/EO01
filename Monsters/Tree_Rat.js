import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Tree Rat'],
      tableData: [
        ['1'],
        ['a'],
        ['1'],
        ['a']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead} />
          <Rows data={state.tableData} textStyle={styles.textBox} />
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  textHead: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 145,
  },
  textBox: {
    fontSize: 15,
    paddingHorizontal: 170,
  }
});