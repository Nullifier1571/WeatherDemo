// 新建表模型
export const UserSchema = {
    name: 'User',
    properties: {
        userName: 'string',
        passWordHax:'string',
        tel_number: {type: 'string', default: '156xxxxxxxx'},   // 添加默认值的写法
        city: 'string' // 直接赋值的方式设置类型
    }
};