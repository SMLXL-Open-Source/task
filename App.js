import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import colors from './Colors';
import tempData from './tempData';
import TodoList from './components/TodoList';

//fontLoader();
export default class app extends React.Component {
  state = {
    addTodoVisible: false
  }

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible })
  }
  render() {
    return (
      <View style={styles.container}>

        <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
          <View>
            <Text>I am a modal! :)</Text>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
             <Text style={{ color: colors.blue }}>To</Text>dos
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={20} color={colors.blue} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.black,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 60,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
});
