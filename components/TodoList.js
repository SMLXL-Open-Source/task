import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import color from '../Colors';
import ActionModal from '../components/ActionModal';

export default class TodoList extends React.Component {
    state = {
        showListVisible: false
    }

    toggleListModal() {
        this.setState({ showListVisible: !this.state.showListVisible })
    }
    render() {
        const list = this.props.list;
        const completedCount = list.todos.filter(todo => todo.completed).length;
        const remainingCount = list.todos.length - completedCount;
        return (
            <View>
                <Modal animationType="slide" visible={this.state.showListVisible} onRequestClose={() => this.toggleListModal()}>
                    <ActionModal list={list} closeModal={() => this.toggleListModal()} />
                </Modal>
                <TouchableOpacity style={[styles.listContainer, { backgroundColor: list.color }]} onPress={() => this.toggleListModal()}>
                    <Text style={styles.listTitle} numberOfLines={1}>
                        {list.name}
                    </Text>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.count}>{remainingCount}</Text>
                        <Text style={styles.subtitle}>Remaining</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.count}>{completedCount}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 220
    },
    listTitle: {
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 28,
        color: color.white,
        marginBottom: 8
    },
    count: {
        fontSize: 40,
        color: color.white,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    }
})
