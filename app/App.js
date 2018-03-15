/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import StatusBar from 'StatusBar';
import  {LoginScreen} from './pager/LoginScreen';
import  {MainScreen} from './pager/MainScreen';
import  {SettingScreen} from './pager/SettingScreen';
import {
    StackNavigator,
} from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const RootNavigator =StackNavigator({
    LoginScreen: {screen: LoginScreen},
    MainScreen: {screen: MainScreen},
    SettingScreen: {screen: SettingScreen},
});

export default class App extends Component<Props> {
  render() {
    return (
        <View style={{ width: 360, height:640}}>
            <StatusBar
                animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                hidden={false}  //是否隐藏状态栏。
                backgroundColor={'green'} //状态栏的背景色
                translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
            />
            <RootNavigator/>
        </View>
    );
  }
}


