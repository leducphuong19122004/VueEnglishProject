<template>
     <div class="sign-up-page">
        <div class="close-container">
            <a href="/"><i class='bx bx-x' style="font-size: 40px; color: #797D7F; cursor: pointer;"></i></a>
            <div class="login-btn">
                <a href="/login" style="text-decoration: none; color: #696969;"><span>LOGIN</span></a>
            </div>
        </div>
        <div class="sign-up-container">
            <div class="sign-up-illustration">
                <img src="../../public/Icon/Sign-up.gif" alt="sign up gif">
                <p>Vue English là một website ôn thi Tiếng Anh THPT tốt nhất hiện nay. Hãy đăng kí tài khoản để có thể trải nghiệm Vue English một cách tốt nhất nhé &#128521;</p>
            </div>
            <div class="sign-up-box">
                <div class="title-sign-up">
                    <h1>Sign up</h1>
                </div>
                <div class="fill-box">
                    <input type="text" placeholder="Tên người dùng" v-model="username">
                </div>
                <div class="fill-box">
                    <input type="email" placeholder="Email" v-model="email">
                </div>
                <div class="fill-box">
                    <input type="password" placeholder="Mật khẩu" v-model="password">
                    <img src="https://cdn-icons-png.flaticon.com/512/709/709724.png" alt="seen password" class="seen-password-img">
                </div>
                <div class="fill-box">
                    <input type="password" placeholder="Nhập lại mật khẩu" v-model="confirmPassword">
                    <img src="https://cdn-icons-png.flaticon.com/512/709/709724.png" alt="seen password" class="seen-password-img">
                </div>
                <div class="check-box">
                    <input type="checkbox">
                    <p>Tôi đồng ý với các điều khoản và chính sách</p>
                </div>
                <div class="button-sign-up" @click="signUp()">
                    <button>Tạo tài khoản</button>
                </div>
                <div class="break-line">
                    <div class="line"></div>
                    <div class="or">Hoặc</div>
                    <div class="line"></div>
                </div>
                <div class="other-sign-up">
                    <div class="other-sign-up-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png" alt="facebook" class="icon-face-google"> 
                        <h3 style="color: #4267B2;">facebook</h3>
                    </div>
                    <div class="other-sign-up-button">
                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="google" class="icon-face-google">
                        <h3 style=" color: #808080;">google</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { userSignup } from '../service/index'
import { setStore } from '@/utils/storage'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        ...mapMutations([
              'RECORD_USER_LOGIN'
        ]),
        signUp() {
            const data = {
                username: this.username,
                email: this.email,
                password: this.password,
            }
           userSignup(data).then(returnedData => {
                if (returnedData.status) {
                    setStore('status', 'true');
                    const data = {
                        status: returnedData.status,
                        userID: returnedData.userID
                    }
                    this.RECORD_USER_LOGIN(data);
                    this.$router.replace('/');
                }else {
                    console.log("error sign up");
                }
           })
        }
    }
}
</script>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Geologica&display=swap');
    body {
        margin: 0;
    }
    .sign-up-page {
        background-color: #ffff;
        width: 100vw;
        height: 100vh;
        padding: 30px 30px;
        box-sizing: border-box;
    }
    .sign-up-illustration {
        display: inline-block;
        max-width: 650px;
    }
    .sign-up-illustration p {
        font-family: 'Geologica', sans-serif;
        font-size: 25px;
    }
    .close-container {
        display: flex;
        justify-content: space-between;
    }
    .login-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .login-btn a {
        border: 2px solid #C0C0C0;
        border-radius: 15px;
        width: 100px;
        background-color: white;
        box-shadow: 0px 2px 0px 1px #C0C0C0;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .login-btn a span {
        font-family: 'Geologica', sans-serif;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: .8px;
        text-transform: uppercase;
    }
    .login-btn a:hover {
        background-color: #CCD1D1;
    }
    .sign-up-container {
        height: calc(100% - 44px);
        display: flex;
        grid-gap: 350px;
        justify-content: center;
        align-items: center;
    }
    .title-sign-up h1 {
        font-family: 'Cherry Bomb One', cursive;
        font-size: 70px;
        margin: 0;
        margin-bottom: 20px !important;
    }
    .sign-up-box {
        display: inline-block;
        text-align: center;
        width: 375px;
        margin-top: -200px;
    }
    .fill-box {
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
        background-color: #C0C0C0;
        height : 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .fill-box input {
        border: none;
        background: none;
        outline: none;
        font-family: 'Geologica', sans-serif;
        font-size: 15px;
        margin-left: 10px;
        width: 100%;
    }
    .check-box {
        display: flex;
        align-items: center;
        margin-top: 10px;
        grid-gap: 8px;
    }
    .check-box input {
        margin: 0;
        margin-left: 5px;
    }
    .check-box p {
        margin: 0;
        font-family: 'Geologica', sans-serif;
        color: #808080;
    }
    .button-sign-up {
        margin: 20px 0px;
        border-radius: 15px;
        background-color: #4ee70c;
        box-shadow: 0 4px #0a9d25;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }
    .button-sign-up button {
        background: none;
        border: none;
        padding: 15px 10px;
        font-family: 'Geologica', sans-serif;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: .8px;
        text-transform: uppercase;
        color: white ;
        cursor: pointer;
    }
    .break-line {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
    }
    .line {
        height: 3px;
        background-color: #C0C0C0;
        width: 100%;
    }
    .or {
        font-family: 'Geologica', sans-serif;
        padding: 0px 5px;
        text-transform: uppercase;
        font-weight: 700;
        color: #C0C0C0;
    }
    .seen-password-img {
        width: 30px;
        height: 30px; 
        margin: 0px 10px;
        cursor: pointer;
    }
    .other-sign-up {
        display: flex;
        justify-content: space-between;
    }
    .other-sign-up-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #C0C0C0;
        border-radius: 15px;
        padding: 0px 15px;
        grid-gap: 8px;
        width: 150px;
        box-shadow: 0px 1px 0px 1px #C0C0C0;
        cursor: pointer;
    }
    .other-sign-up-button:hover {
        background-color: #CCD1D1;
    }
    .other-sign-up-button h3 {
        text-transform: uppercase;
        font-family: 'Geologica', sans-serif;
        font-weight: 700;
        letter-spacing: .8px;
        font-size: 16px;

    }
    .icon-face-google {
        width: 30px;
        height: 30px;
    }
</style>