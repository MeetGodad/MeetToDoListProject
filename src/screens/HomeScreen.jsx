
import React from 'react';
import { Button, SafeAreaView, View , StyleSheet , Pressable , Text} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from "../components/ToDoForm";

import MainLayout from '../layouts/MainLayout';


const HomeScreen = ( {navigation}) =>{

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const [tasks , setTasks] = React.useState([]);

  return (
    <MainLayout >
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm  addTask={addTask} />
          <Pressable style={styles.button}  onPress={() => navigation.navigate('AboutScreen')}>
            <Text style={styles.btnText}> Go to About </Text>
          </Pressable>
     </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    height: 40,
    width: 200,
    alignSelf: 'center',  
  },

  btnText: {
    color: 'white',
      fontSize: 16,
      textAlign: 'center',
  },
  
});

