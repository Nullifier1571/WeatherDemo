import React, {Component} from 'react';
import {DeviceEventEmitter} from 'react-native'
import {
    Alert,
    Text,
    Image,
    View,
    Animated,
    AppRegistry,
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList,
    SectionList,
    TouchableOpacity,
    Button
} from 'react-native';


export class SettingScreen extends Component {
    static navigationOptions = {
        title: 'SettingScreen',
    };

    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        return (
            <Text style={[styles.textview]}>请输入用户名: </Text>
        );
    }
}


const styles = StyleSheet.create(
    {
        textview: {
            width: 100, height: 30
        },
        textinput: {
            width: 50, height: 30
        },
        button:{
            width: 50, height: 30
        },
        stop: {
            width: 50, height: 30
        },
    }
);