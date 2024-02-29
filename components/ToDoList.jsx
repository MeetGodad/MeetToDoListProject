import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';
  
  export default function ToDoList({ tasks }) {
    return (
      <ScrollView>
        <View style={styles.container}>
          {tasks.map((task, index) => (
            <Pressable key={index}>
              <View style={[styles.taskContainer, styles.incompleteTask]}>
                <View style={styles.circle} />
                <Text style={styles.taskText}>{task}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  task: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4D4D4D',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedCircle: {
    borderColor: '#707070',
  },
  checkmark: {
    width: 12,
    height: 9,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    transform: [{ rotate: '45deg' }],
  },
  subTaskContainer: {
    marginLeft: 20,
  },
  subTask: {
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
  },
  subTaskText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
  },
});
