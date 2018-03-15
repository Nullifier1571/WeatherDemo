import { combineReducers } from 'redux';
import { LOGIN} from '../actions/actionsTypes';

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

// 原始默认state
const defaultState = {
    userName: "",
    passWord: "",
    isSuccess:false
}

function getNewState(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            Alert.alert("AAA","=="+state.userName+"==="+state.passWord);
            return { ...state, isSuccess: true };
        default:
            return defaultState;

    }
}

export default combineReducers({
    getNewState
});