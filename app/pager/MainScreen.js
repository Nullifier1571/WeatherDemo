import React, {Component} from 'react';
import {DeviceEventEmitter} from 'react-native'
import {
    Alert,
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    ListView,
} from 'react-native';

import {PullList} from 'react-native-pull';


export class MainScreen extends Component {
    static navigationOptions = {
        title: 'MainScreen',
        header: null
    };

    constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: `this is the first.`,
        }];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
        // this.loadMore();
    }

    onPullRelease(resolve) {
        //下拉刷新了
        fetch("http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=b16956348d60b9c8449e07651598daa1")
            .then((response) => response.json())        // json方式解析，如果是text就是 response.text()
            .then((responseData) => {   // 获取到的数据处理
                this.txtCityName.setNativeProps({style: show});//获取到 城市组件 然后设置名称
                Alert.alert("successful",JSON.stringify(responseData));
            })
            .catch((error) => {     // 错误处理
                Alert.alert("error", "==" + error);
            })
            .done();


        setTimeout(() => {
            resolve();
        }, 3000);
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray"/>
                <Text ref={(c) => {
                    this.txtPulling = c;
                }}>当前PullList状态: pulling...</Text>
                <Text ref={(c) => {
                    this.txtPullok = c;
                }}>当前PullList状态: pullok......</Text>
                <Text ref={(c) => {
                    this.txtPullrelease = c;
                }}>当前PullList状态: pullrelease......</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <PullList
                    style={{}}
                    onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender}
                    topIndicatorHeight={60}
                    renderHeader={this.renderHeader}
                    dataSource={this.state.list}
                    pageSize={5}
                    initialListSize={5}
                    renderRow={this.renderRow}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this.renderFooter}
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>城市名字</Text>
                    <Text style={{fontWeight: 'bold'}} ref={(c) => {
                        this.txtCityName = c;
                    }}>北京</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>湿度</Text>
                    <Text style={{fontWeight: 'bold'}}>20%</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>风力</Text>
                    <Text style={{fontWeight: 'bold'}}>8级</Text>
                </View>
            </View>
        );
    }

    renderRow(item, sectionID, rowID, highlightRow) {
        return (
            <View style={{height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
                <Text>{item.title}</Text>
            </View>
        );
    }

    renderFooter() {
        if (this.state.nomore) {
            return null;
        }
        return (
            <View style={{height: 100}}>
                <ActivityIndicator/>
            </View>
        );
    }

    loadMore() {
        this.dataSource.push({
            id: 0,
            title: `begin to create data ...`,
        });
        for (var i = 0; i < 5; i++) {
            this.dataSource.push({
                id: i + 1,
                title: `this is ${i}`,
            })
        }
        this.dataSource.push({
            id: 6,
            title: `finish create data ...`,
        });
        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);
    }
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#F5FCFF',
        },
        textview: {
            width: 100, height: 30
        },
        textinput: {
            width: 50, height: 30
        },
        button: {
            width: 50, height: 30
        },
        stop: {
            width: 50, height: 30
        },
    }
);