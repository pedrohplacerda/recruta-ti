import React from 'react';
import { View, StyleSheet } from 'react-native';

const Body = ({ children }) => {
    return (<View style={styles.body}>{children}</View>)
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#03989E',
        margin: 8
    }
});

export default Body;