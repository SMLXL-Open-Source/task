import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import colors from '../Colors';

export default class ActionModal extends Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    todos: this.props.list.todos
  }
  renderActions = todo => {
    return (
      <View style={styles.actionContainer}>
        <TouchableOpacity>
          <Ionicons name={todo.completed ? 'ios-square' : 'ios-square-outline'} size={24} color={colors.gray} style={{ width: 32 }} />
        </TouchableOpacity>

        <Text style={[styles.action, {
          textDecorationLine: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? colors.lightGray : colors.black
        }]}>{todo.title}</Text>
      </View>
    )
  }
  render() {
    const actionCount = this.state.todos.length;
    const completedCount = this.state.todos.filter(action => action.completed).length
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}>
          <AntDesign name="close" size={24} color={colors.black} onPress={this.props.closeModal} />
        </TouchableOpacity>

        <View style={[styles.section, styles.header, { borderBottomColor: this.state.color }]}>
          <View>
            <Text style={styles.title}>{this.state.name}</Text>
            <Text style={styles.actionCount}>
              {completedCount} of {actionCount} actions
            </Text>
          </View>
        </View>

        <View style={[styles.section, { flex: 3 }]}>
          <FlatList data={this.state.todos}
            renderItem={({ item }) => this.renderActions(item)}
            keyExtractor={item => item.title}
            contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <KeyboardAvoidingView style={[styles.section, styles.footer]} behavior="padding">
          <TextInput style={[styles.input, { borderColor: this.state.color }]} />
          <TouchableOpacity style={[styles.addAction, { backgroundColor: this.state.color }]}>
            <AntDesign name="plus" size={16} color={colors.white} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    flex: 1,
    alignSelf: 'stretch'
  },
  header: {
    justifyContent: 'flex-end',
    marginLeft: 64,
    borderBottomWidth: 3
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black
  },
  actionCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8
  },
  addAction: {
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: "center"
  },
  actionContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  action: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16
  }
})
