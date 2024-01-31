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
  
  export default function ToDoList(props) {
  return (
    <>
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Wake Up at 8am</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Attend Class</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Complete The Assignment </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go To Job at 5pm</Text>
          </View>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#f8f8f8', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
    },
    completed: {
      backgroundColor: '#e0e0e0',
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
    },
    taskText: {
      fontSize: 16,
      color: '#333', 
      textAlign: 'left', 
    }
  });
