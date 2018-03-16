'use strict';

import React, {Component} from 'react';
import {login,switchPager} from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import {MainScreen} from "./MainScreen";

export class LoginScreen extends Component {
    static navigationOptions = {
        title: 'LoginScreen',
        header: null
    };

    constructor(props) {
        super(props);
        this.state={passWord:"",userName:""}
    }

    static contextTypes = {
        store: PropTypes.object,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>

                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 100}}>
                    <Text style={{
                        width: 150, height: 60, fontSize: 28, textAlign: 'center',
                    }}>天气预报</Text>
                </View>


                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 100}}>
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

                <View style={{marginTop: 25, width: 250, alignSelf: "center"}}>
                    <Button
                        title="登录"
                        color="#8065df"
                        accessibilityLabel="login"
                        onPress={()=>{
                            function invoke(isSuccess) {
                                if(isSuccess){
                                    navigate("MainScreen", {name: "MainScreen"})
                                }else {
                                    Alert.alert("错误","账号密码不对！")
                                }
                            }
                            this.context.store.dispatch(login(this.state.userName,this.state.passWord,invoke));
                        }}
                    />
                </View>
                <View style={{marginTop: 25, width: 250, alignSelf: "center"}}>
                    <Button
                        title="注册"
                        color="#8065df"
                        accessibilityLabel="login"
                        onPress={()=>{
                            navigate("RegisterPager", {name: "RegisterPager"})
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

