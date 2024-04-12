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
  import { useEffect , useState} from 'react';
  import tasksData from '../data/tasks.json';
  
  export default function ToDoForm( {addTask}) {

    const [taskText, setTaskText] = React.useState('');
    const tasks = tasksData.tasks;
    
    useEffect(() => {
      if (tasks.length > 0) {
        addTask(tasks[0]);
      }
    }, []);

    const handleAddTask = () => {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[randomIndex];
      setTaskText(randomTask);
    };
  

    return (
        <>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Add a new task in the list"
                onChangeText = {(text) => setTaskText(text)}
                value={taskText}
                />

                <Pressable style={styles.addTask} onPress={() => addTask(taskText)}>
                  <Text style={styles.buttonText}>Add Task</Text>
                </Pressable>
                <Pressable style={styles.genTask} onPress={handleAddTask}>
                  <Text style={styles.buttonText}>Generate Random Task</Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
      borderRadius: 5,
      backgroundColor : '#f6f7f8',
      color: 'black',
      height: 40,
      width: 300,
      margin: 10,
    },
    addTask: {
      backgroundColor: '#841584',
      padding: 10,
      borderRadius: 5,
      margin: 10,
      height: 40,
      width: 200,
    },
    genTask: {
      backgroundColor: '#584754',
      padding: 10,
      borderRadius: 5,
      margin: 10,
      height: 40,
      width: 200,

    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });
