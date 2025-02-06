import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-3xl'>Home Auora</Text>
            <StatusBar style='auto' />
            <Link href={'/profile'} style={{ color: 'blue' }}> Goto Profile</Link>
        </View>
    );
}

export default App;
