import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default CreateScreen = ({navigation}) =>{

    const {addBlogPost} = useContext(Context);

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, ()=> navigation.navigate('Blogs'));
    }} />
}

const styles = StyleSheet.create({

});

