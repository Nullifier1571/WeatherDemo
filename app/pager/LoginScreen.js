'use strict';

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


export class LoginScreen extends Component {
    static navigationOptions = {
        title: 'LoginScreen',
        header:null
    };

    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        return (
            <View>

                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 100}}>
                    <Text style={{
                        width: 150, height: 60,fontSize:28,textAlign:'center',
                    }}>天气预报</Text>
                </View>


                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 100}}>
                    <Image source={require('../image/username.png')} style={{
                        width: 30, height: 30, alignSelf: "flex-end",
                        marginBottom: 5
                    }}/>
                    <TextInput style={[styles.textinput]} placeholder='请输入用户名'/>
                </View>

                <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 5}}>
                    <Image source={require('../image/password.png')}
                           style={{width: 30, height: 30, marginBottom: 5, alignSelf: "flex-end"}}/>
                    <TextInput style={[styles.textinput]} placeholder='请输入密码'/>
                </View>

                <View style={{marginTop: 25,width:250, alignSelf: "center"}}>
                    <Button
                        title="登录"
                        color="#8065df"
                        accessibilityLabel="login"
                        onPress={onButtonPress}
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


const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};
