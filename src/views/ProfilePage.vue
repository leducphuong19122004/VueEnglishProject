<template>
<button-login-signup></button-login-signup>
<sidebar-page></sidebar-page>
<not-login-page v-if="!this.login"></not-login-page>
    <div class="profile" v-if="this.login">
        <div class="profile-container">
            <div class="info-user-section">
                <div class="personal-info-secion">
                    <div class="avatar">
                      <img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="add avatar icon">
                    </div>
                    <div class="info-text">
                        <h2>Le Duc Phuong</h2>
                        <p>ID: 1341324214</p>
                        <p>Đã tham gia vao tháng 9 năm 2023</p>
                    </div>
                </div>
                <div class="break-line"></div>
                <div class="statistic-secion">
                    <h2 class="title">Thống kê</h2>
                    <div class="statistic-box-container">
                        <div class="statistic-box">
                            <h3>Từ vựng</h3>
                            <div class="info-box">
                                <span>Số từ: 200 / 1500</span>
                                <span>Thứ hạng: 50 / 100</span>
                            </div>
                        </div>
                        <div class="statistic-box">
                            <h3>Ngữ pháp</h3>
                            <div class="info-box">
                                <span>Số từ: 200 / 1500</span>
                                <span>Thứ hạng: 50 / 100</span>
                            </div>
                        </div>
                        <div class="statistic-box">
                            <h3>Đề thi</h3>
                            <div class="info-box">
                                <span>Số từ: 200 / 1500</span>
                                <span>Thứ hạng: 50 / 100</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="achievement-section">
                  <div class="header-achievement-section">
                    <h2 class="title">Thành tích</h2>
                    <h2 class="show-all">Tất cả</h2>
                  </div>
                    <div class="achievement-box-container">
                        <div class="achievement-box">
                            <div class="achievement-icon" style="background-image: url('https://cdn-icons-png.flaticon.com/128/12027/12027423.png');"></div>
                            <div class="achievement-text">
                                <h3>TOP 1</h3>
                                <p>TOP 1 học từ vựng</p>
                            </div>
                        </div>
                        <div class="achievement-box" style="border: none;">
                            <div class="achievement-icon" style="background-image: url('https://cdn-icons-png.flaticon.com/128/419/419952.png');"></div>
                            <div class="achievement-text">
                                <h3>TOP 1</h3>
                                <p>TOP 1 học từ vựng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="friend-section">
                <div class="list-friend-section">
                    <h2 class="title">Bạn bè</h2>
                    <div class="list-friend">
                        <div class="friend-box">
                            <div class="avatar-friend"></div>
                            <div class="info-friend">
                                <h3>Nguyen Thi Yen</h3>
                                <p>online</p>
                            </div>
                        </div>
                        <div class="friend-box">
                            <div class="avatar-friend"></div>
                            <div class="info-friend">
                                <h3>Nguyen Thi Yen</h3>
                                <p>online</p>
                            </div>
                        </div>
                        <div class="friend-box">
                            <div class="avatar-friend"></div>
                            <div class="info-friend">
                                <h3>Nguyen Thi Yen</h3>
                                <p>online</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add-friend-section">
                    <h2 class="title">Thêm bạn bè</h2>
                    <div class="list-function">
                        <div class="function-box">
                            <img src="https://cdn-icons-png.flaticon.com/128/3077/3077325.png" alt="icon">
                            <h3 class="name-function">Tìm kiếm bạn bè</h3>
                            <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="arrow-icon" class="arrow-icon">
                        </div>
                        <div class="function-box">
                            <img src="https://cdn-icons-png.flaticon.com/128/10206/10206656.png" alt="icon">
                            <h3 class="name-function">Mời bạn bè</h3>
                            <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="arrow-icon" class="arrow-icon">
                        </div>
                        <div class="function-box">
                            <img src="https://cdn-icons-png.flaticon.com/128/4406/4406235.png" alt="icon">
                            <h3 class="name-function">Kết nối với facebook</h3>
                            <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="arrow-icon" class="arrow-icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarPage from '../components/SidebarPage'
import ButtonLoginSignup from '../components/ButtonLoginSignup'
import NotLoginPage from '@/components/NotLoginPage.vue';

import { mapState } from 'vuex';

export default {
    computed: {
            ...mapState([
                'login'
            ])
    },
    components : {
            ButtonLoginSignup,
            SidebarPage,
            NotLoginPage
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geologica&display=swap');
.profile  {
    height: 100vh;
    width: 1663px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .profile-container {
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .info-user-section {
    display: flex;
    flex-direction: column;
  }
  .personal-info-secion {
    display: flex;
    flex-direction: row;
    grid-gap: 50px;
    margin-bottom: 20px;
  }
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ttfYzs-dO8Bu9dvO7Npd6p5HY_9u1qMa2w&usqp=CAU");
    background-position: center;
    background-size: cover;
    border: 4px solid #FFA000;
    position: relative;
  }
  .avatar img {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 5px;
    right: 0px;
    cursor: pointer;
  }
  .info-text h2 {
    font-family: 'Geologica', sans-serif;
    margin: 0;
  }
  .info-text p {
    margin: 5px 0px;
    font-size: 20px;
    font-family: din-round,sans-serif;
  }
  .break-line {
    height: 2px;
    background-color: #B2BABB;
  }
  .statistic-secion {
    font-family: din-round,sans-serif;
  }
  .statistic-box-container{
    display: flex;
    flex-direction: column;
    grid-gap: 12px;
  }
  .statistic-box {
    border: 2px solid #B2BABB;
    border-radius: 16px;
    padding: 15px 24px;
  }
  .statistic-box h3 {
    margin: 0;
    margin-bottom: 10px !important;
  }
  .info-box {
    display: flex;
    justify-content: space-between;
  }
  .achievement-section {
    font-family: din-round,sans-serif;
  }
  .header-achievement-section {
    display: flex;
    justify-content: space-between;
  }
  .show-all {
    color: #00A5FF;
    cursor: pointer;
  }
  .achievement-box-container {
    border: 2px solid #B2BABB;
    border-radius: 16px;
  }
  .achievement-box {
    display: flex;
    align-items: center;
    grid-gap: 20px;
    border-bottom: 2px solid #B2BABB;
    padding: 20px 0px 20px 10px;
  }
  .achievement-icon {
    background-position: center;
    background-size: cover;
    width: 70px;
    height: 70px;
  }
  .achievement-text {
    display: flex;
    flex-direction: column;
    height: 70px;
  }
  .achievement-text h3 {
    margin-bottom: 10px !important;
    margin: 0;
  }
  .achievement-text p {
    margin: 0;
  }
  .friend-section {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    font-family: din-round,sans-serif;
    width: 400px;
  }
  .list-friend-section {
    border-radius: 16px;
    border: 2px solid #B2BABB;
    padding: 20px 16px;
  }
  .list-friend-section h2 {
    margin: 0;
    margin-bottom: 20px !important;
  }
  .add-friend-section {
    border: 2px solid #B2BABB;
    border-radius: 16px;
  }
  .list-friend {
    display: flex;
    flex-direction: column;
  }
  .friend-box {
    display: flex;
    grid-gap: 15px;
    cursor: pointer;
    padding: 10px;
    border-radius: 16px;
  }
  .friend-box:hover {
    background-color: #D3D3D3;
  }
  .avatar-friend {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3vQS5rPzPzhC2Ao79BzvSIqcWNj_xnq1tg&usqp=CAU");
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: cover;
    border-radius: 16px;
    border: 2px solid #FF0082;
  }
  .info-friend h3 {
    margin: 0;
  }
  .info-friend p {
    margin: 0;
  }
  .add-friend-section {
    padding: 20px 16px;
  }
  .add-friend-section h2 {
    margin: 0;
    margin-bottom: 20px !important;
  }
  .list-function {
    display: flex;
    flex-direction: column;
  }
  .function-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .function-box img {
    width: 50px;
    height: 50px;
  }
  .arrow-icon {
    width: 20px !important;
    height: 20px !important;
  }
</style>