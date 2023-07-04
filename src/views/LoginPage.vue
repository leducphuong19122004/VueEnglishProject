<template>
  <div class="container">
    <div class="child-container">
      <div class="close-container">
        <a href="/"><i class='bx bx-x' style="font-size: 40px; color: #797D7F; cursor: pointer;"></i></a>
        <div class="signup-btn">
            <a><span>Sign up</span></a>
        </div>
      </div>
      <div class="form">
        <h2 class="header">Login</h2>
        <div class="item item1">
          <input placeholder="Enter your email" type="email"  v-model="email">
        </div>
        <div class="item item2">
          <input placeholder="Enter your password" type="password" @keyup.enter="login"  v-model="password">
          <span class="err-mes">{{ errMes }}</span>
        </div>
        <div class="button">
          <button @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { userLogin } from '../service/index';
import { setStore } from '../utils/storage';
import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                email : '',
                password : '',
                errMes :'',
            }
        },
        methods : {
            ...mapMutations([
              'RECORD_USER_LOGIN'
          ]),
          login(){
              const email = this.email;
              const password = this.password;
              if(!email) {
                  this.errMes = "Vui lòng nhập đầy đủ thông tin !";
                  setTimeout(() => {
                      this.errMes = '';
                  }, 2000)
              } 
              if (!password) {
                this.errMes = "Vui lòng nhập đầy đủ thông tin !";
                  setTimeout(() => {
                      this.errMes = '';
                  }, 2000)
              } 
              if( email && password){
                  const dataLogin = {
                      email : email,
                      password : password
                  }
                  userLogin(dataLogin).then((status)=>{
                    if (status) {
                        setStore('status', 'true');
                        this.RECORD_USER_LOGIN(true);
                        this.$router.replace('/');
                    }else {
                      this.errMes = "Tài khoản không hợp lệ !";
                      setTimeout(() => {
                        this.errMes = '';
                      }, 2000)
                    }
                  }
                  );
              }
              }
                
        }
    }
</script>
<style scoped>

/* font-family */
@import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geologica&display=swap');

.container{
  background-color: #4ee70c;
  opacity: 0.8;
  width: 100vw;
  height: 100vh;
}

.close-container {
  display: flex;
  justify-content: space-between;
}

.signup-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.signup-btn a {
  border-radius: 15px;
  width: 100px;
  background-color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.signup-btn a span {
  font-family: 'Geologica', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  text-transform: uppercase;
}

.signup-btn a:hover {
  background-color: #CCD1D1;
}

.child-container{
  padding: 30px 30px 30px 30px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.form {
    margin: auto;
    background-color : white;
    width : 350px;
    height : 450px;
    border-radius: 50px;
    text-align: center;
}

.header {
  margin : 0;
  padding-top: 35px;
  padding-bottom: 35px;
  text-align: center;
  font-size: 60px;
  font-family: 'Cherry Bomb One', cursive;
}

input {
  border-radius: 10px;
  width: 300px;
  height : 50px;
  margin: auto;
  outline: none;
  padding: 0px 0px 0px 10px;
  font-size: 15px;
  box-sizing: border-box;
  border: none;
  background-color: #C0C0C0;
  font-family: 'Geologica', sans-serif;
}

.item1{
  padding-bottom: 20px;
}
.item2{
  padding-bottom: 30px;
}

button{
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #4ee70c;
  font-family: 'Geologica', sans-serif;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .8px;
  text-transform: uppercase;
  color: white;
}

button:hover {
  opacity: 0.8;
}

.err-mes{
    display: block;
    color: #d44d44;
    font-family: 'Geologica', sans-serif;
    text-align: left;
    padding: 0 0 0 30px;
}
</style>