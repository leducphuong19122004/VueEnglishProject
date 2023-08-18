<template>
     <div class="content-container">
    <div class="intro-container">
      <img src="https://cdn-icons-png.flaticon.com/512/4819/4819831.png" >
      <div class="content-intro">
        <h2>Tổng quan về ngữ pháp</h2>
        <p>Theo ma trận đề thi tiếng Anh THPT Quốc gia, các câu hỏi liên quan đến ngữ pháp chiếm đến 46%. Vậy nên, ngữ pháp được coi như <br> một chiếc “phao cứu sinh” giúp sĩ tử vượt qua bài thi một cách dễ dàng. Vì vậy mình đã tổng hợp tất cả các ngữ pháp có thể ra trong <br> đề thi THPT quốc gia.</p>
        <p>Nguồn ngữ pháp mình tham khảo của : </p>
      </div>
    </div>
    <div class="br"></div>
    <div class="list-grammar">
        <div class="list-header">
            <img src="https://cdn-icons-png.flaticon.com/512/4806/4806129.png">
            <h2>Các chuyên đề ngữ pháp</h2>
            <img src="https://cdn-icons-png.flaticon.com/512/4806/4806129.png">
        </div>
        <div class="item-of-list">
          <router-link to="/grammar/lesson/1" style="text-decoration: none;">
            <!-- 1 -->
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11515/11515737.png">
                <div class="content-item">
                    <p>Các thì trong tiếng Anh</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/2" style="text-decoration: none;">
            <!-- 2 -->
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516003.png">
                <div class="content-item">
                    <p>Gerund and infinitive – Các dạng thức của động từ</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/3" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516114.png">
                <div class="content-item">
                    <p>Modal verbs – Động từ khiếm khuyết</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/4" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516217.png">
                <div class="content-item">
                    <p>Types of Words – Các loại từ</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/5" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516304.png">
                <div class="content-item">
                    <p>Comparison – So sánh trong Tiếng Anh</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/6" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516355.png">
                <div class="content-item">
                    <p>Passive Voice – Câu Bị động</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/7" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516420.png">
                <div class="content-item">
                    <p>Reported speech – Câu gián tiếp</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/8" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516485.png">
                <div class="content-item">
                    <p>Conditional sentences – Câu điều kiện</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/9" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11516/11516355.png">
                <div class="content-item">
                    <p>WISH / IF ONLY – Câu điều ước</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/10" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11515/11515741.png">
                <div class="content-item">
                    <p>Subject & Verb Agreement – Sự hòa hợp giữa chủ ngữ và
                    động từ</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/11" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11515/11515776.png">
                <div class="content-item">
                    <p>Inversions – Đảo ngữ</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/12" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11515/11515822.png">
                <div class="content-item">
                    <p>Clauses – Mệnh đề</p>
                </div>
            </div>
          </router-link>
          <router-link to="/grammar/lesson/13" style="text-decoration: none;">
            <div class="item">
                <img src="https://cdn-icons-png.flaticon.com/512/11515/11515870.png">
                <div class="content-item">
                    <p>Phonetics – Ngữ âm</p>
                </div>
            </div>
          </router-link>
      </div>
    </div>
   </div>
</template>
<style scoped>
.content-container {
    height: 100vh;
    width : 1663px;
    position: absolute;
    top: 0;
    right : 0;
  }
  .intro-container img{
    width: 200px;
  }

  .intro-container {
    display : flex;
    padding: 50px 0px 50px 50px;
    
  }
  .content-intro {
    margin-left: 30px;
  }
  .content-intro h2{
    margin-top: 0px;
    font-family: 'Geologica', sans-serif;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .content-intro p {
    font-family: din-round,sans-serif;
    line-height: 24px;
    font-size: 20px;
  }
  .br {
    background-color: #B2BABB;
    height: 2px;
    margin-right: 180px;
    margin-left: 50px;
  }
  .list-grammar{
    margin-top: 40px;
  }
  .list-header{
    text-align: center;
  }

  .list-header h2 {
    display: inline;
    font-family: 'Geologica', sans-serif;
    font-size: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .list-header img{
    width: 40px;
  }

  .item-of-list{
    padding: 50px 0px 50px 60px;
  }

  .item{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
    color: black;
}
.item:hover{
    color: #4ee70c;
  }

  .item img {
      width: 45px;
      height: 45px;
      margin-right: 20px;
    }
    .content-item {
        display: inline-block;
    }
    
    .content-item p{
        margin: 10px;
        font-family: din-round,sans-serif;
        font-size: 25px;
        font-weight: bold;
  }

</style>