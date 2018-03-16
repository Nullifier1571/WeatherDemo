import { LOGIN,SWITCHPAGER,REGISTER} from './actionsTypes';

const login = (userName,passWord,invoke) => ({ type: LOGIN,userName:userName,passWord:passWord,invoke:invoke});
const register = (userName,passWord,rePassWord) => ({ type: REGISTER,userName:userName,passWord:passWord,rePassWord:rePassWord});
const switchPager = (pagerName) => ({ type: SWITCHPAGER,pagerName:pagerName});

export {
    login,
    switchPager,
    register,
}