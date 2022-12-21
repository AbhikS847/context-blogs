import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather, EvilIcons} from '@expo/vector-icons'; 
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';

export default App = () => {

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
    <Provider>
    <Stack.Navigator>
      <Stack.Screen name="Blogs" component={IndexScreen}
      options = {({navigation})=> ({
        headerRight: () => (<TouchableOpacity onPress={()=>{navigation.navigate('Create')}}><Feather name="plus" size={30} color="black" /></TouchableOpacity>)
      })}></Stack.Screen>
      <Stack.Screen name="Show" component={ShowScreen}
      options = {({navigation, route})=> ({
        headerRight: () => (<TouchableOpacity onPress={()=>{
          const {id} = route.params;
          navigation.navigate('Edit', {id:id})}}><EvilIcons name="pencil" size={35} color="black"></EvilIcons></TouchableOpacity>)
      })}></Stack.Screen>
      <Stack.Screen name="Create" component={CreateScreen}></Stack.Screen>
      <Stack.Screen name="Edit" component={EditScreen}></Stack.Screen>
    </Stack.Navigator>
    </Provider>
    </NavigationContainer>
  )
}