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
        <div class="test-container">
          <div class="title-test">
            <img src="https://cdn-icons-png.flaticon.com/512/1294/1294738.png" alt="arrow">
            <span>Năm 2023</span>
          </div>
          <div class="list-test">
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
              </div>
            </div>
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
              </div>
            </div>
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
              </div>
            </div>
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
              </div>
            </div>
          </div>
        </div>
        <div class="test-container">
          <div class="title-test">
            <img src="https://cdn-icons-png.flaticon.com/512/1294/1294738.png" alt="arrow">
            <span>Năm 2022</span>
          </div>
          <div class="list-test">
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
              </div>
            </div>
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
              </div>
            </div>
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
              </div>
            </div>
            <div class="test">
              <div class="img-test">
              </div>
              <div class="name-test">
                <p>Đề thi 2023 mã đề 401</p>
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

    export default {
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
</style>