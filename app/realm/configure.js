/**
 * @flow
 */

'use strict';

import Realm from 'realm';
import Schema from './schema';
import {UserSchema} from '../models/User';
import {
    Alert,
} from 'react-native';

let realm;
export function configureRealm() {
    // 根据提供的表初始化 Realm，可同时往数组中放入多个表
    realm= new Realm({schemaVersion:2,schema: [UserSchema]});
}

// 增加
export function createData(userName,passWordHax) {

    if(realm===undefined){
        realm= new Realm({schemaVersion:2,schema: [UserSchema]});
    }
    let user=filteredData(userName);
    if(user!=null&&user.length===1){
        //已经有一个这个名字的用户了
        return false;
    }else {
        realm.write(() => {
            realm.create('User', { userName:userName, tel_number:'137xxxxxxxx', city:'xx省xx市xxxxxx',passWordHax:passWordHax});
        });
        return true;
    }

}

// 根据条件查询
export function filteredData(userName) {
    if(realm===undefined){
        realm= new Realm({schemaVersion:2,schema: [UserSchema]});
    }

    // 获取Person对象
    let Users = realm.objects('User');

    //Demo let tanDogs = dogs.filtered('color = "tan" AND name BEGINSWITH "B"'); 所以怎么把tan换成参数传进来呢？？？？
    let user= Users.filtered("userName ="+"\'"+userName+"\'");
    return user;

}