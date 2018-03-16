import { combineReducers } from 'redux';
import { LOGIN,SWITCHPAGER,REGISTER} from '../actions/actionsTypes';
import {configureRealm,createData,filteredData} from '../realm/configure';
import {
    Alert,
} from 'react-native';
import {RegisterPager} from "../pager/RegisterPager";

// 原始默认state
const defaultState = {
    userName: "",
    passWord: "",
    isSuccess:false
}

function getNewState(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isSuccess: true };
        case SWITCHPAGER:

            return { ...state };
        case REGISTER:
            if(action.passWord!==action.rePassWord){
                Alert.alert("错误","密码两次输入不一致");
            }else {
                configureRealm();
                let isSuccess=createData(action.userName,action.passWord);
                if(isSuccess){
                    let user= filteredData(action.userName);
                    Alert.alert("成功",action.userName+"注册成功！"+action.passWord);
                }else {
                    Alert.alert("错误","已经有这个用户了"+action.userName);
                }

            }
            return { ...state };
        default:
            return defaultState;

    }
}

export default combineReducers({
    getNewState
});
