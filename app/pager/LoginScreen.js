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
    };

    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        return (
            <View>
                <Text>请输入用户名: </Text>
                {/*<TextInput style={[styles.textinput]} placeholder='请输入用户名'/>
                <Text style={[styles.textview]}>请输入密码: </Text>
                <TextInput style={[styles.textinput]} placeholder='请输入密码'/>

                <Button
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
*/}
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


/*
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};*/
