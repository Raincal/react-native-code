/**
 * 购物车
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    NavigatorIOS,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
} = React;

var Model = [
    {
        id: '1',
        title: '佳沛新西兰进口猕猴桃',
        desc: '12个装',
        price: 99,
        url: 'http://vczero.github.io/ctrip/guo_1.jpg'
    },
    {
        id: '2',
        title: '墨西哥进口牛油果',
        desc: '6个装',
        price: 59,
        url: 'http://vczero.github.io/ctrip/guo_2.jpg'
    },
    {
        id: '3',
        title: '美国加州进口车厘子',
        desc: '1000g',
        price: 91.5,
        url: 'http://vczero.github.io/ctrip/guo_3.jpg'
    },
    {
        id: '4',
        title: '新疆特产西梅',
        desc: '1000g',
        price: 69,
        url: 'http://vczero.github.io/ctrip/guo_4.jpg'
    },
    {
        id: '5',
        title: '陕西大荔冬枣',
        desc: '2000g',
        price: 59.9,
        url: 'http://vczero.github.io/ctrip/guo_5.jpg'
    },
    {
        id: '6',
        title: '南非红心西柚',
        desc: '2500g',
        price: 29.9,
        url: 'http://vczero.github.io/ctrip/guo_6.jpg'
    }
];

var Item = React.createClass({
    render: function () {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.props.press}>
                    <Image
                        resizeMode="contain"
                        style={styles.img}
                        source={{uri: this.props.url}}>
                        <Text numberOfLines={1} style={styles.item_text}>
                            {this.props.title}
                        </Text>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }
});

var List = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            str: null
        }
    },
    componentDidMount: function () {
        var _that = this;
        AsyncStorage.getAllKeys(function (err, keys) {
            if (err) {
                //TODO
            }
            var _count = keys.length;
            if (_count) {
                var _str = ', 共' + _count + '件商品';
                _that.setState({
                    count: _count,
                    str: _str
                });
            }
        })
    },

    render: function () {
        var list = [];
        for (var i in Model) {
            if (i % 2 === 0) {
                var row = (
                    <View style={styles.row} key={i}>
                        <Item
                            url={Model[i].url}
                            title={Model[i].title}
                            press={this.press.bind(this, Model[i])}>
                        </Item>
                        <Item
                            url={Model[parseInt(i) + 1].url}
                            title={Model[parseInt(i) + 1].title}
                            press={this.press.bind(this, Model[parseInt(i) + 1])}>
                        </Item>
                    </View>
                );
                list.push(row);
            }
        }
        return (
            <ScrollView style={{marginTop: 0}}>
                {list}
                <Text onPress={this.goGouWu} style={styles.btn} ref="jiesuan">去结算{this.state.str}</Text>
            </ScrollView>
        );
    },
    goGouWu: function () {
        var _that = this;
        this.props.navigator.push({
            component: GouWu,
            title: '购物车',
            passProps: {
                clear: function () {
                    _that.setState({
                        count: 0,
                        str: null
                    })
                }
            }
        })
    },
    press: function (data) {
        var count = this.state.count;
        count++;
        if (count) {
            var _str = ', 共' + count + '件商品';
            this.setState({
                count: count,
                str: _str
            });
        }


        AsyncStorage.setItem('SP-' + this.genId() + '-SP', JSON.stringify(data), function (err) {
            if (err) {
                //TODO
            }
        });
    },
    genId: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r * 0x3 | 0 * 8);
            return v.toString(16);
        }).toUpperCase();
    }
});

var GouWu = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            price: 0
        }
    },
    render: function () {
        let {data, price} = this.state;
        let list = [];
        for (var i in data) {
            price += parseFloat(data[i].price);
            list.push(
                <View style={[styles.row, styles.list_item]} key={i}>
                    <Text style={styles.list_item_desc}>
                        {data[i].title}
                        {data[i].desc}
                    </Text>
                    <Text style={styles.list_item_price}>¥{data[i].price}</Text>
                </View>
            )
        }
        var str = null;
        if (price) {
            str = ', 共' + price.toFixed(1) + '元';
        }
        return (
            <ScrollView style={{marginTop: 10}}>
                {list}
                <Text style={styles.btn}>支付{str}</Text>
                <Text style={styles.clear} onPress={this.clearStorage}>清空购物车</Text>
            </ScrollView>
        );
    },
    componentDidMount: function () {
        var _that = this;
        AsyncStorage.getAllKeys(function (err, keys) {
            if (err) {
                //TODO
            }
            AsyncStorage.multiGet(keys, function (errs, result) {
                var arr = [];
                for (var i in result) {
                    arr.push(JSON.parse(result[i][1]))
                }
                _that.setState({
                    data: arr
                })
            })
        })
    },
    clearStorage: function () {
        var _that = this;
        AsyncStorage.clear(function (err) {
            if (!err) {
                _that.setState({
                    data: [],
                    price: 0
                });
                _that.props.clear();
                alert('购物车已经清空');
            }
            //TODO: ERR
        })
    }
});

var Shopping = React.createClass({
    render: function () {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={
          {
            component: List,
            title: '水果列表'
          }
        }/>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    item: {
        flex: 1,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 5,
        height: 100
    },
    img: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    item_text: {
        backgroundColor: '#000',
        opacity: 0.7,
        color: '#fff',
        height: 25,
        lineHeight: 18,
        textAlign: 'center',
        marginTop: 74
    },
    btn: {
        backgroundColor: '#FF7200',
        height: 33,
        textAlign: 'center',
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
        lineHeight: 27,
        fontSize: 18
    },
    list_item: {
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderWidth: 1,
        height: 30,
        borderRadius: 3,
        borderColor: '#ddd'
    },
    list_item_desc: {
        flex: 2,
        fontSize: 15
    },
    list_item_price: {
        flex: 1,
        textAlign: 'right',
        fontSize: 15
    },
    clear: {
        marginTop: 10,
        backgroundColor: '#FFF',
        color: '#000',
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 24,
        height: 33,
        fontSize: 18,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('Shopping', () => Shopping);
