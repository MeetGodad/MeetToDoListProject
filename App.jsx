
import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import useState from 'react';

function App() {
  const [tasks , setTasks] = React.useState([
     'Wake Up at 8am', 
     'Attend Class',
     'Complete The Assignment',
     'Go To Job at 5pm',
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;