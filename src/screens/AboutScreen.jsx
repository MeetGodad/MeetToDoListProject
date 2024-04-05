import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { View , Text , Button } from 'react-native';

const AboutScreen = ({navigation}) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold' , color:'darkblue'}}>Welcome ToDo List App</Text>
          <Text style={{fontSize: 16 , color:'darkblue'}}>This is a simple ToDo List App Created By Meet Patel</Text>
          <Text style={{fontSize: 16, color: 'darkgray' }}>Today's Date: {currentDate}</Text>  
        </View>
        <View style={{marginTop: 20}}>
          <Button title="Go Back Home Screen" onPress={() => navigation.navigate('HomeScreen')} />
        </View >
    </MainLayout>
  );
};

export default AboutScreen;