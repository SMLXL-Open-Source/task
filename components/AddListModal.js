import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Colors';
import tempData from '../tempData';

export default class AddListModal extends Component {
    backgroundColors = ["#5CD859", "#24A6D9", "#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"];
    state = {
        name: '',
        color: this.backgroundColors[0]
    };

    createProject = () => {
        const {name, color} = this.state
        tempData.push({
            name,
            color,
            todos: []
        })
        this.setState({name: ''});
        this.props.closeModal()
    }
    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity key={color} style={[styles.selectColor, { backgroundColor: color }]} onPress={() => this.setState({color})} />
            )
        })
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
          <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32 }}>
              <AntDesign name="close" size={24} color={colors.black} onPress={this.props.closeModal} />
          </TouchableOpacity>

          <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
            <Text style={styles.title}>Create Project</Text>

            <TextInput style={[styles.input, { borderColor: this.state.color }]} placeholder="Project name" onChangeText={text => this.setState({name: text})} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                {this.renderColors()}
            </View>

            <TouchableOpacity style={[styles.create, { backgroundColor: this.state.color }]} onPress={this.createProject}>
                <Text style={{ color: colors.white, fontWeight: 'bold' }}>
                    Create
                </Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: 'center'
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectColor: {
        width: 30,
        height: 30,
        borderRadius: 4
    }
})