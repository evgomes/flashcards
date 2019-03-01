import React, { Fragment } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Card = (props) => {
    const { content } = props

    return (
        <Fragment>
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>
                    {content}
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.intoText}>
                    Tap to flip
                </Text>
            </View>
        </Fragment>
    );
};

export default Card

const styles = StyleSheet.create({
    contentContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },

    contentText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center'
    },

    infoContainer: {
        flex: 1,
        color: '#FFF',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    intoText: {
        color: '#FFF',
        marginBottom: 15,
        fontStyle: 'italic',
        fontSize: 12
    }
})