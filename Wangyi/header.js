'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    } = React;

var Header = React.createClass({
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>網易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    header: {
        marginTop: 25,
        height: 50,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor: '#EF2D36',
        alignItems: 'center'
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    font_1: {
        color: '#CD1D1C'
    },
    font_2: {
        color: '#FFFFFF',
        backgroundColor: '#CD1D1C'
    }
});

module.exports = Header;