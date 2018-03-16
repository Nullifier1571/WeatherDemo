'use strict';

import React, {Component} from 'react';
import {register} from '../actions/actions';

import PropTypes from 'prop-types';
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


export class RegisterPager extends Component {
    static navigationOptions = {
        title: '用户注册',
    };

    constructor(props) {
        super(props);
        this.state={passWord:"",userName:"",rePassWord:""}
    }

    static contextTypes = {
        store: PropTypes.object,

    };

    render() {
        return (
            <View>

                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 10}}>
                    <Image source={require('../image/username.png')} style={{
                        width: 30, height: 30, alignSelf: "flex-end",
                        marginBottom: 5
                    }}/>
                    <TextInput style={[styles.userNameTextInput]} placeholder='请输入用户名'
                               onChangeText={(userName)=>this.setState({userName})}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 5}}>
                    <Image source={require('../image/password.png')}
                           style={{width: 30, height: 30, marginBottom: 5, alignSelf: "flex-end"}}/>
                    <TextInput style={[styles.passWordTextInput]} placeholder='请输入密码' keyboardType="numeric"
                               onChangeText={(passWord)=>{this.setState({passWord});}}/>
                </View>

                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 5}}>
                    <Image source={require('../image/password.png')}
                           style={{width: 30, height: 30, marginBottom: 5, alignSelf: "flex-end"}}/>
                    <TextInput style={[styles.passWordTextInput]} placeholder='请再次输入密码' keyboardType="numeric"
                               onChangeText={(rePassWord)=>{this.setState({rePassWord});}}/>
                </View>

                <View style={{marginTop: 25, width: 250, alignSelf: "center"}}>
                    <Button
                        title="注册"
                        color="#8065df"
                        accessibilityLabel="login"
                        onPress={()=>{
                            this.context.store.dispatch(register(this.state.userName,this.state.passWord,this.state.rePassWord));
                        }}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create(
    {
        textview: {
            width: 100, height: 30
        },
        userNameTextInput: {
            width: 200,
        },
        passWordTextInput: {
            width: 200,
        },
        button: {
            width: 50, height: 30
        },
        stop: {
            width: 50, height: 30
        }, bigblue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red'
        },
    }
);




const onButtonPressed = () => {
    //修改文本输入框的属性值
    store.dispatch(login());
};
