'use strict';

import React, {Component} from 'react';
import {login} from '../actions/actions';
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


export class LoginScreen extends Component {
    static navigationOptions = {
        title: 'LoginScreen',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {userName: ''}
        this.state = {passWord: ''}
    }

    static contextTypes = {
        store: PropTypes.object,
    };

    render() {
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
                    <TextInput style={[styles.textinput]} placeholder='请输入用户名'
                                 onChangeText={(textInputValue)=>this.setState({userName:textInputValue})}
                />
                </View>

                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 5}}>
                    <Image source={require('../image/password.png')}
                           style={{width: 30, height: 30, marginBottom: 5, alignSelf: "flex-end"}}/>
                    <TextInput style={[styles.textinput]} placeholder='请输入密码'
                               onChangeText={(passWord)=>{this.setState({passWord});}}/>
                </View>

                <View style={{marginTop: 25, width: 250, alignSelf: "center"}}>
                    <Button
                        title="登录"
                        color="#8065df"
                        accessibilityLabel="login"
                        onPress={()=>{
                            const storeData = this.context.store.getState();
                            Alert.alert("AAA",storeData.userName+""+storeData.password)
                            this.context.store.dispatch(login());
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
        textinput: {
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
