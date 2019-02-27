import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Container, Button, Text, Footer, FooterTab, Badge } from 'native-base'

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
            <Container style={styles.container}>
                <View style={{ padding: 10 }}>
                    <Badge style={{ backgroundColor: '#004d00' }}   >
                        <Text>1/2</Text>
                    </Badge>
                </View>
                <View style={styles.container}>
                    <TouchableNativeFeedback onPress={this.flipCard}>
                        <View>
                            <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: this.frontOpacity }]}>
                                <Text style={styles.flipText}>
                                    This text is flipping on the front.
                            </Text>
                            </Animated.View>
                            <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: this.backOpacity }]}>
                                <Text style={styles.flipText}>
                                    This text is flipping on the back.
                            </Text>
                            </Animated.View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <Footer>
                    <FooterTab>
                        <Button style={{ backgroundColor: '#004d00' }} full success onPress={this.flipCard}>
                            <Text style={{ color: '#FFF' }}>Correct</Text>
                        </Button>
                        <Button style={{ backgroundColor: '#b30000' }} full danger onPress={this.flipCard}>
                            <Text style={{ color: '#FFF' }}>Incorrect</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    flipCard: {
        width: 300,
        height: 300,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13244E',
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        backgroundColor: "#b30000",
        position: "absolute",
        top: 0,
    },
    flipText: {
        width: 150,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
});