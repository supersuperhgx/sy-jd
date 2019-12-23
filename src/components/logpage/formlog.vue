<template>
  <div class="formwrap">
    <form method="get">
      <p class="upinput">
        <input  v-model="message1" class="username" @input="mistake" @focus="mistake"  type="text" placeholder="用户名/邮箱/手机号" />
         <span class="delete" v-if="show" @click.capture="remove">
            <img src="../../assets/logimg/delete.png" alt="">
         </span>
      </p>
      <p class="downinput">
        <input  v-model="message2" class="pwd" type="passworld" placeholder="请输入密码"  />
       <span class="delete pwddelete" v-if="show1" @click="remove">
            <img src="../../assets/logimg/delete.png" alt="">
         </span>
        <span class="eyes" @click="open">
          <img v-show="ok1" src="../../assets/logimg/close.png" alt />
          <img v-show="ok2" src="../../assets/logimg/open.png" alt />
        </span>
        <span class="forget">忘记密码</span>
      </p>
      <div class="notice">
          {{warning}}
      </div>
      <div class="login" @click="login">登录</div>
      <div class="oncelogin">一键登录</div>
      <p class="fastlog">
        <span>短信验证码登录</span>
        <span>手机快速注册</span>
      </p>
      <div class="qqlog">
          <p>其他登陆方式</p>
          <div class="wechatlog">
              <div>
                  <img src="../../assets/logimg/QQ.png" alt="">
                  <p>QQ</p>
              </div>
              <div>
                  <img src="../../assets/logimg/wechat.png" alt="">
                  <p>微信</p>
              </div>
          </div>
      </div>
      <p class="agree">
          登录即代表您已同意<a href="">京东隐私政策</a>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
        warning:"",
        message1:"",
        message2:"",
      ok1: true,
      ok2: false,
      i: 1,
      show:false,
      show1:true
    };
  },
  methods: {
    open() {
      if (this.i % 2 !== 0) {
        (this.ok1 = false), (this.ok2 = true);
      } else {
        (this.ok1 = true), (this.ok2 = false);
      }
      this.i++;
    },
    mistake(){
        this.show=true
    },
    remove(){
        this.message1 = ""
    },
    login(){
        // console.log(this.$store.state.userinformation)
        if(this.$store.state.userinformation.username == this. message1 && this.$store.state.userinformation.passworld ==this. message2){
                // console.log(1) 
                this.warning = "",
                this.$router.push({ path: "/" });
                this.$store.commit("login");
                localStorage.setItem("user",JSON.stringify(this.message1))
                localStorage.setItem("pwd",JSON.stringify(this.message2))

        }else{
                this.warning ="账号或者密码错误"
        }
    }
  },

};
</script>
<style scoped>
.formwrap {
  width: 100%;
  height: 100%;
}
form {
  width: 100%;
  height: 100%;
}
.upinput,
.downinput {
  height: 50px;
  margin: 20px 0px 0px;
  padding: 10px 0px;
  /* border-bottom: 1px solid red; */
  border-bottom: 1px solid #efefef;
  position: relative;
}
.upinput > input,
.downinput > input {
  width: 100%;
  height: 29px;
  border: none;
  outline: none;
}
.upinput > input::placeholder,
.downinput > input::placeholder {
  font-size: 17px;
}

.forget {
  display: inline-block;
  width: 82px;
  height: 23px;
  padding: 0px 10px 0px 15px;
  position: absolute;
  text-align: center;
  border-left: 1px solid #ccc;
  top: 15px;
  right: 0px;
  font-size: 14px;
}



.eyes {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15px;
  right: 93px;
}

.eyes > img {
  width: 100%;
  height: 100%;
}

.login {
  width: 100%;
  height: 6.15%;
  color: #ffffff;
  border-radius: 25px;
  background: #ffbcb3;
  text-align: center;
  line-height: 50px;
}

.notice {
  font-size: 0.14rem;
  /* line-height: 15px; */
  color: #f23030;
  min-height: 15px;
  text-align: left;
}

.oncelogin {
  width: 100%;
  height: 6.15%;
  color: #ffffff;
  border-radius: 25px;
  border: #ff2200 1px solid;
  text-align: center;
  line-height: 50px;
  margin-top: 10px;
  color: #ff2200;
}

.fastlog {
  width: 100%;
  height: 2.3%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
}

.qqlog{
    width: 100%;
    height: 12.3%;
    margin-top: 88px;
    font-size: 12px;
     color: rgba(0, 0, 0, 0.4);
}

.qqlog>p{
 text-align: center
}

.wechatlog{
    display: flex;
    justify-content: center;
    margin: 25px 0px 12px
}
.wechatlog>div>img{
    width: 48px;
    height: 48px
}
.wechatlog>div>p{
    text-align: center
}
.wechatlog>div{
    margin: 0px 15px
}

.agree{
    font-size: 13px;
    margin-top: 27px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center
    
}
.agree>a{
    text-decoration: none;
    color: #4a90e2
}

.delete{
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    right: 0px
}
.delete>img{
    width: 100%;
    height: 100%
}

.pwddelete{
    top: 15px;
    right:120px;
}


</style>