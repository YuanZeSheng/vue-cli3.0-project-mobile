// 自定义方法
var isNumber = (rule, value, callback) => {

  if(value) {
    if (isNaN(value)) {
          callback(new Error('请输入数字电话号码'));
        }else{
          callback()
        }
  }else{
    callback()
  }
};

export default{
  userName: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
  ],
  passWord: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
}
