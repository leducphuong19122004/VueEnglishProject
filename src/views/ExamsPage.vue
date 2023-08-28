<template>
    <button-login-signup></button-login-signup>
    <sidebar-page></sidebar-page>
    <div class="content-container">
      <div class="intro-container">
        <img src="https://cdn-icons-png.flaticon.com/512/426/426833.png">
        <h1>Tổng hợp đề thi chính thức các năm 2018 - 2023</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/426/426833.png">
      </div>
      <div class="main-container">
        <div class="test-container" v-for="x in 6" :key="x">
          <div class="title-test">
            <img src="https://cdn-icons-png.flaticon.com/512/1294/1294738.png" alt="arrow">
            <span>Năm {{ x + 2017 }}</span>
          </div>
          <div class="list-test">
            <div class="test" v-for="y in 4" :key="y" @click="showPopup(x+2017, y)">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi {{ x+2017 }} mã đề 40{{ y }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-test-container" v-show="show">
      <div class="child-popup-test-container">
        <div class="background-popup"></div>
        <div class="popup-test">
          <div class="top-bar">
            <img src="https://cdn-icons-png.flaticon.com/512/6467/6467134.png" alt="close button" @click="closePopup()"> 
          </div>
          <div class="popup-image"></div>
          <div class="title-popup">
            <h3>Đề thi THPT Quốc gia năm {{ year }} mã đề {{ codeTest }}</h3>
          </div>
          <div class="popup-info">
            <span>Thời gian: 60 phút</span>
            <span>Thang điểm: 10/10</span>
          </div>
          <router-link :to="{path: 'exams/test', query: { year: this.year, code: this.codeTest}}" style="text-decoration: none;">
            <div class="start-test">
              <div class="button-start">
                <span>Bắt đầu</span>
                <img src="https://cdn-icons-png.flaticon.com/512/148/148744.png" alt="play icon">
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>
<script>
    import SidebarPage from '../components/SidebarPage'
    import ButtonLoginSignup from '../components/ButtonLoginSignup'

    export default {
        data() {
            return {
                show: false,
                year: 0,
                codeTest: 0
            }
        },
        methods: {
            showPopup(year, codeTest) {
                this.year = year;
                this.codeTest = '40' + codeTest;
                this.show = true;
            },
            closePopup(){
                this.show = false;
            }
        },
        components : {
            ButtonLoginSignup,
            SidebarPage
        }
    }
</script>
<style scoped>
.content-container {
    /* height: 100vh; */
    width : 1663px;
    position: absolute;
    top: 0;
    right : 0;
  }
  .intro-container {
    text-align: center;
    margin-top: 20px;
  }
  .intro-container h1 {
    margin-bottom: 0px;
    font-family: 'Geologica', sans-serif;
    display: inline-block;
    margin: 0px 10px 0px 10px;
  }
  .intro-container img {
    width: 40px;
  }
  .main-container {
    margin: 30px 0px 30px 20px;
  }
  .test-container {
    margin: 30px 0px 0px 0px;
  }
  .title-test {
    display: flex;
  }
  .title-test img {
    width: 35px;
  }
  .title-test span {
    font-family: 'Geologica', sans-serif;
    font-size: 25px;
    font-weight: 600;
    padding: 5px 0px 5px 10px;
  }
  .list-test {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .test {
    width: 300px;
    height: 255px;
    border: solid 4px #4ee70c;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    box-shadow: 0 0 0 1px #0000000d, 0 3px 6px 1px #0000000d;
    transition: box-shadow .3s;
  }
  .test:hover{
    box-shadow: 3px 3px 6px 6px #00000025, 3px 3px 10px 10px #0000001f;
  }
  .img-test {
    width: 300px;
    height: 180px;
    background-color: aqua;
    border-radius: 20px 20px 0px 0px;
    background-image: url("https://prep.vn/blog/wp-content/uploads/2023/03/de-minh-hoa-tieng-anh-thpt-quoc-gia-2023-1-scaled.jpg");
    background-size: cover;
  }
  .name-test {
    margin: 20px 0px 0px 10px;
  }
  .name-test p {
    font-family: din-round,sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
  }
  /* style for popup */
  .popup-test-container {
    z-index: 125;
    width: 100vw;
    height: 100vh;
    transition: transform .5s,-webkit-transform .5s;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .child-popup-test-container {
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: auto;
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }
  .background-popup {
    z-index: 10;
    background-color: #090909cc;
    width: 100%;
    height: 100%;
    transition: background-color .3s;
    position: absolute;
    top: 0;
    left: 0;
  }
  .popup-test {
    z-index: 9999;
    width: 400px;
    height: 400px;
    background: #fff;
    border-radius: 20px;
  }
  .top-bar {
    padding: 5px 5px 0px 5px;
    z-index: 10;
  }
  .top-bar img {
    width: 40px;
    cursor: pointer;
    float: left;
  }
  .popup-image {
    background-image: url("https://prep.vn/blog/wp-content/uploads/2023/03/de-minh-hoa-tieng-anh-thpt-quoc-gia-2023-1-scaled.jpg");
    background-size: cover;
    height: 200px;
    border-radius: 20px;
  }
  .title-popup {
    font-size: 20px;
    font-family: din-round,sans-serif;
    padding: 20px 10px 10px 10px;
  }
  .title-popup h3 {
    margin: 0px;
  }
  .popup-info {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 10px 10px;
  }
  .popup-info span {
    font-family: din-round,sans-serif;
  }
  .start-test {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .button-start {
    display: flex;
    align-items: center;
    background-color: #4ee70c;
    box-shadow: 0 4px #0a9d25;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
  }
  .button-start:hover {
    opacity: 0.8;
  }
  .button-start img {
    width: 40px;
  }
  .button-start span {
    font-size: 20px;
    font-family: 'Geologica', sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    color: white ;
    padding-right: 10px;
  }
</style>