import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../Colors';

export default TodoList = ({list}) => {
    const completedCount = list.todos.filter(todo => todo.completed).length
    const remainingCount = list.todos.filter(todo => !todo.completed).length
    return (
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View style={{ alignItems: 'center'}}>
                <Text style={styles.count}>{remainingCount}</Text>
                <Text style={styles.subtitle}>Remaining</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
                <Text style={styles.count}>{completedCount}</Text>
                <Text style={styles.subtitle}>Completed</Text>
            </View>
        </View>
      );
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
