import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

export default ShowScreen = ({route}) =>{

    const {id} = route.params;
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id );
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

const styles = StyleSheet.create({

});

