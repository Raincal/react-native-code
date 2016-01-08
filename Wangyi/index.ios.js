/**
 * 網易新聞
 */
'use strict';

var React = require('react-native');
var Header = require('./header');

var {
    ScrollView,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = React;

var List = React.createClass({
    render: function () {
        var lists = [];
        for (var i in this.props.lists) {
            var title = (
                <View style={styles.list_item} key={i}>
                    <Text style={styles.list_item_font}>
                        {this.props.lists[i]}
                    </Text>
                </View>
            );
            lists.push(title);
        }
        return (
            <View>
                {lists}
            </View>
        )
    }
});

var ImportantNews = React.createClass({
    show: function (title) {
        alert(title);
    },
    render: function () {
        var news = [];
        for (var i in this.props.news) {
            var text = (
                <View style={styles.newsWrap} key={i}>
                    <Text
                        onPress={this.show.bind(this, this.props.news[i])}
                        numberOfLines={2}
                        style={styles.news_item}>
                        {this.props.news[i]}
                    </Text>
                </View>
            );
            news.push(text);
        }
        return (
            <View style={styles.container}>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        )
    }
});

var Wangyi = React.createClass({
    render: function () {
        let lists = [
            'A股暂停熔断首日反弹 两市近1600股上涨',
            '人民币贬值 民众抢购外汇致网银系统瘫痪',
            '公诉人称淫秽搜索结果快播最多 王欣驳斥',
            '人民币首周持续贬值 换1千美元多掏400元',
            '国足主帅佩兰下课 足协或需付3个月薪水',
            '狮子王头上长出神秘獠牙',
            '沙丘环绕碧绿湖泊美景似天堂'
        ];
        let news = [
            '2015年CPI今公布或涨1.5% 涨幅或创6年新低',
            '县官放言我张口没人敢再说 全县129名官员被查',
            '北京拟增配偶陪产假15天 二孩间隔或可自己做主',
            '网络主播直播撞车续:重伤者家属称其用车祸牟利'
        ];
        return (
            <View style={styles.container}>
                <Header></Header>
                <ScrollView>
                    <List lists={lists}></List>
                    <ImportantNews news={news}></ImportantNews>
                </ScrollView>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        justifyContent: 'center'
    },
    list_item_font: {
        fontSize: 16
    },
    news_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CD1D1C',
        marginLeft: 10,
        marginTop: 25,
        marginBottom: 10
    },
    newsWrap: {
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    news_item: {
        paddingRight: 60,
        fontSize: 15,
        lineHeight: 25
    }
});

AppRegistry.registerComponent('Wangyi', () => Wangyi);
