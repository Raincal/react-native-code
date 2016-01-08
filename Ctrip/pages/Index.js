'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');

var {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    PixelRatio,
    } = React;

var sliderImgs = [
    'http://images3.c-ctrip.com/dj/app/201512/app_home_ad1263_750_150.png',
    'http://images3.c-ctrip.com/dm/app/app_home_ad031_750_150.jpg',
    'http://images3.c-ctrip.com/dj/201512/zc/app_home_ad18_750_150.jpg'
];

var BUIcon = [
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png'
];

var Images = [
    'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
    'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead02.png'
];

//轮播图
var Slider = React.createClass({
    render: function () {
        return (
            <Swiper style={styles.wrapper} height={80} showsButtons={false} autoplay={true} showsPagination={false}>
                <Image style={styles.slide} source={{uri: sliderImgs[0]}}></Image>
                <Image style={styles.slide} source={{uri: sliderImgs[1]}}></Image>
                <Image style={styles.slide} source={{uri: sliderImgs[2]}}></Image>
            </Swiper>
        )
    }
});

var Index = React.createClass({
    render: function () {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <Slider/>

                    <View style={[styles.sbu_red, styles.sbu_view]}>
                        <TouchableHighlight underlayColor={'#FA6778'} style={[styles.sbu_borderRight,{flex:1}]}>
                            <View style={[styles.sbu_flex]}>
                                <View style={[styles.sub_con_flex, styles.sub_text]}>
                                    <Text style={[styles.font16]}>酒店</Text>
                                </View>
                                <View style={[styles.sub_con_flex]}>
                                    <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                            <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                                <Text style={[styles.font16]}>海外酒店</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={[styles.font16]}>特惠酒店</Text>
                            </View>
                        </View>
                        <View style={[styles.sbu_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                                <Text style={[styles.font16]}>团购</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={[styles.font16]}>客栈.公寓</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.sbu_blue, styles.sbu_view]}>
                    <TouchableHighlight underlayColor={'#3D98FF'} style={[styles.sbu_borderRight,{flex:1}]}>
                        <View style={[styles.sbu_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={[styles.font16]}>机票</Text>
                            </View>
                            <View style={[styles.sub_con_flex]}>
                                <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>火车票</Text>
                        </View>
                        <View style={[styles.sub_con_flex, styles.sub_text]}>
                            <Text style={[styles.font16]}>国际机票</Text>
                        </View>
                    </View>
                    <View style={[styles.sbu_flex]}>
                        <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>汽车票.船票</Text>
                        </View>
                        <View style={[styles.sub_con_flex, styles.sub_text]}>
                            <Text style={[styles.font16]}>自驾.专车</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sbu_green,styles.sbu_view]}>
                    <TouchableHighlight underlayColor={'#5EBE00'} style={[styles.sbu_borderRight,{flex:1}]}>
                        <View style={[styles.sbu_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={[styles.font16]}>旅游</Text>
                            </View>
                            <View style={[styles.sub_con_flex]}>
                                <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[2]}}></Image>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>攻略.身边</Text>
                        </View>
                        <View style={[styles.sub_con_flex, styles.sub_text]}>
                            <Text style={[styles.font16]}>周末游</Text>
                        </View>
                    </View>
                    <View style={[styles.sbu_flex]}>
                        <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>邮轮</Text>
                        </View>
                        <View style={[styles.sub_con_flex, styles.sub_text]}>
                            <Text style={[styles.font16]}>保险.签证</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sbu_yellow, styles.sbu_view]}>
                    <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>门票.玩乐</Text>
                        </View>
                        <View style={[styles.sub_con_flex, styles.sub_text]}>
                            <Text style={[styles.font16]}>礼品卡</Text>
                        </View>
                    </View>
                    <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>美食</Text>
                        </View>
                        <View style={[styles.sub_con_flex, styles.sub_text]}>
                            <Text style={[styles.font16]}>出境WIFI</Text>
                        </View>
                    </View>
                    <View style={[styles.sbu_flex]}>
                        <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>全球购</Text>
                        </View>
                        <View style={[styles.sub_con_flex, styles.sub_text]}>
                            <Text style={[styles.font16]}>更多</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.img_view]}>
                    <View style={[styles.img_flex]}>
                        <Image style={[styles.img_wh]} source={{uri:Images[0]}}></Image>
                    </View>
                    <View style={[styles.img_flex, {borderLeftWidth:0}]}>
                        <Image style={[styles.img_wh]} source={{uri:Images[1]}}></Image>
                    </View>
                </View>
            </ScrollView>
        )
    }
});

var styles = StyleSheet.create({
    //container
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1
    },
    //slider
    wrapper: {
        height: 75
    },
    slide: {
        height: 75,
        resizeMode: Image.resizeMode.contain
    },
    //sbu
    sbu_view: {
        height: 89,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1/PixelRatio.get(),
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: 'row'
    },
    sbu_red: {
        backgroundColor: '#FA6778',
        borderColor: '#FA6778'
    },

    sbu_blue: {
        backgroundColor: '#3D98FF',
        borderColor: '#3D98FF'
    },

    sbu_green: {
        backgroundColor: '#5EBE00',
        borderColor: '#5EBE00'
    },

    sbu_yellow: {
        backgroundColor: '#FC9720',
        borderColor: '#FC9720'
    },
    sbu_flex: {
        flex: 1
    },
    sbu_borderRight: {
        borderColor: '#fff',
        borderRightWidth: 1/PixelRatio.get()
    },
    sbu_icon_img: {
        width: 40,
        height: 33,
        resizeMode: Image.resizeMode.contain
    },
    sub_con_flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sub_text: {
        justifyContent: 'center'
    },
    font16: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '800'
    },
    sbu_borderBottom: {
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#fff'
    },
    img_view: {
        height: 71,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    img_flex: {
        flex: 1,
        borderWidth: 1/PixelRatio.get(),
        borderColor: '#ccc'
    },
    img_wh: {
        height: 69,
        borderRightWidth: 0,
        resizeMode: Image.resizeMode.contain
    }
});

module.exports = Index;