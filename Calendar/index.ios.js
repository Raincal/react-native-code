/**
 * Calendar
 */
'use strict';

var React = require('react-native');
var Calendar = require('./calendar');

var {
    View,
    AppRegistry,
    StyleSheet,
    StatusBarIOS
    } = React;

StatusBarIOS.setHidden(true);

var Index = React.createClass({
    render: function () {
        var holiday = {
            '2015-10-1': '国庆节',
            '2015-9-10': '教师节',
            '2016-1-1': '元旦节',
            '2016-2-8': '春节'
        };
        var check = {
            '2016-1-13': 'checked',
            '2016-2-8': 'checked'
        };
        var headerStyle = {
            backgroundColor: '#3C9BFD',
            color: '#fff',
            fontSize: 16,
            fontWeight: '500'
        };
        return (
            <View style={styles.container}>
                <Calendar
                    touchEvent={this.press}
                    headerStyle={headerStyle}
                    holiday={holiday}
                    check={check}
                />
            </View>
        );
    },

    press: function (str) {
        alert(str);
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

AppRegistry.registerComponent('Calendar', () => Index);