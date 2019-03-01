import React, { Component, Fragment } from 'react'
import { View, StyleSheet, Animated, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Container, Button, Text, Footer, FooterTab } from 'native-base'
import Card from './Card'

class Quiz extends Component {
    static navigationOptions = {
        title: "Quiz",
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        this.frontOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [1, 0]
        })
        this.backOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [0, 1]
        })
    }

    flipCard = () => {
        Animated.spring(this.animatedValue, {
            toValue: this.value >= 90 ? 0 : 180,
            friction: 8,
            tension: 10
        }).start();
    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate }
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }

        return (
            <Fragment>
                <View style={styles.infoContainer}>
                    <View style={styles.progressText}>
                        <Text style={{ color: '#FFF' }}>2/2</Text>
                    </View>
                    <View style={styles.percentageText}>
                        <Text style={{ color: '#FFF' }}>80%</Text>
                    </View>
                </View>
                <Container style={styles.container}>
                    <View style={styles.container}>
                        <TouchableNativeFeedback onPress={this.flipCard}>
                            <View>
                                <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: this.frontOpacity }]}>
                                    <Card content="This text is flipping on the front." />
                                </Animated.View>
                                <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: this.backOpacity }]}>
                                    <Card content="This text is flipping on the back." />
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <Footer>
                        <FooterTab>
                            <Button style={styles.correctButton} full success onPress={this.flipCard}>
                                <Text style={{ color: '#FFF' }}>Correct</Text>
                            </Button>
                            <Button style={styles.incorrectButton} full danger onPress={this.flipCard}>
                                <Text style={{ color: '#FFF' }}>Incorrect</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ deckDetail }) {
    console.log(deckDetail);

    return {
        deckDetail
    }
}

function mapDipatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Quiz)

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#13244E'
    },

    progressText: {
        color: '#FFF',
        marginLeft: 10,
        fontWeight: 'bold'
    },

    percentageText: {
        color: '#FFF',
        marginLeft: 10,
        fontWeight: 'bold',
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    flipCard: {
        width: 300,
        height: 300,
        borderRadius: 15,
        backgroundColor: '#13244E',
        backfaceVisibility: 'hidden',
    },

    flipCardBack: {
        backgroundColor: "#b30000",
        position: "absolute",
        top: 0,
    },

    correctButton: {
        backgroundColor: '#004d00'
    },

    incorrectButton: {
        backgroundColor: '#b30000'
    }
});