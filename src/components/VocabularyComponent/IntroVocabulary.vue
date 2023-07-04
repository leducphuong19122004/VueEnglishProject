<template>
  <div class="content-container">
  <div class="intro-container">
    <img src="https://cdn-icons-png.flaticon.com/512/8011/8011440.png" class="icon">
    <div class="content-intro">
      <h2>Hướng dẫn cách học từ vựng</h2>
      <p>Xin chào các bạn đã đến với trang học từ vựng ! Các bạn biết là để có thể đạt điểm cao trong kì thi THPT Quốc gia thì ngoài ngữ pháp <br>chúng ta cần trang bị cho bản thân một vốn từ vựng "phong phú", với kinh nghiệm bản thân đã từng thi THPT môn tiếng Anh đạt 9.6 <br>điểm thì mình xin chia sẻ cho các bạn list 1500 từ vựng quan trọng, cần thiết nhất !</p>
      <p>Chú ý : Nguồn từ vựng mình tham khảo của thầy <a href="https://www.toeicmoingay.com/gioi-thieu/">Đỗ An Duy</a></p>
    </div>
  </div>
  <div class="br"></div>
  <div class="list-vocabulary">
    <div class="list-header">
      <img src="https://cdn-icons-png.flaticon.com/512/953/953717.png" >
      <h2>1500 từ vựng quan trọng</h2>
      <img src="https://cdn-icons-png.flaticon.com/512/953/953717.png">
    </div>
    <div class="item-of-list">
      <div class="item item1">
        <h3 class="level">Cấp 1</h3>
        <p>Dành cho bạn nào mục tiêu 6 đến 7 điểm</p>
        <h4>( 753 từ )</h4>
        <router-link to="/vocabulary/1"><button>Học ngay</button></router-link>
      </div>
      <div class="item">
        <h3 class="level">Cấp 2</h3>
        <p>Dành cho bạn nào mục tiêu 7 đến 8 điểm</p>
        <h4>( 511 từ )</h4>
        <router-link to="/vocabulary/2"><button>Học ngay</button></router-link>
      </div>
      <div class="item">
        <h3 class="level">Cấp 3</h3>
        <p>Dành cho bạn nào mục tiêu 8 đến 9 điểm</p>
        <h4>( 283 từ )</h4>
        <router-link to="/vocabulary/3"><button>Học ngay</button></router-link>
      </div>
      <div class="item">
        <h3 class="level">Cấp 4</h3>
        <p>Dành cho bạn nào mục tiêu 9 điểm trở lên</p>
        <h4>( 242 từ )</h4>
        <router-link to="/vocabulary/4"><button>Học ngay</button></router-link>
      </div>
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
  a{
    text-decoration: none;
}

.icon {
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
.list-vocabulary {
  margin-top: 40px;
}
.list-header {
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
.items {
  display: flex;
  padding: 30px;
}

.item-of-list {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 50px 150px 20px 150px;
  justify-content: space-between;
}

.item{
  text-align: center;
  margin: 0px 100px 50px 100px;
}
.item button {
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-family: din-round,sans-serif;
  font-size: 20px;
  background-color: #4ee70c;
  font-weight: 700;
  letter-spacing: .8px;
  text-transform: uppercase;
  color: white ;
  border: none;
}

.item p {
  font-family: din-round,sans-serif;
  line-height: 24px;
  font-size: 20px;
  margin-bottom: 15px;
}

.item h3 {
  font-family: 'Geologica', sans-serif;
  font-size: 30px;
  margin-bottom: 10px;
}
.item h4 {
  font-family: din-round,sans-serif;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 15px;
}

</style>