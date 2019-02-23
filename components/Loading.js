import React from 'react'
import { StyleSheet } from "react-native"
import { Content, Spinner } from 'native-base'


const Loading = () => {
    return (
        <Spinner />
    )

};

export default Loading

const styles = StyleSheet.create({
    spinner: {
        color: '#13244E'
    }
})