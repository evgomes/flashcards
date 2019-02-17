import React, { Fragment } from 'react'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { Constants } from 'expo'
import { StyleSheet, View } from 'react-native'

const Toolbar = (props) => {
    const { title } = props

    return (
        <Fragment>
            <View>
                <View style={styles.statusBar} />
            </View>
            <Header style={styles.header}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        </Fragment>
    );
};

export default Toolbar

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#030D26",
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: "#13244E"
    }
});