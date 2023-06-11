<template>
    <div class="content-container">
  <div class="content">
   <div class="item">
     <div class="image">
       <img src="https://www.awanj.org/wp-content/uploads/2022/12/Little-Orphan-Annie-1024x970.jpg">
     </div>
     <div class="subject">
       <span>ANIMALS</span>
     </div>
   </div>
    <div class="item">
     <div class="image">
       <img src="https://www.yourdentistryguide.com/wp-content/uploads/2017/11/smile-anatomy-min.jpg">
     </div>
     <div class="subject">
       <span>BODY</span>
     </div>
   </div>
    <div class="item">
     <div class="image">
       <img src="https://www.awanj.org/wp-content/uploads/2022/12/Little-Orphan-Annie-1024x970.jpg">
     </div>
     <div class="subject">
       <span>ANIMALS</span>
     </div>
   </div>
    <div class="item">
     <div class="image">
       <img src="https://www.awanj.org/wp-content/uploads/2022/12/Little-Orphan-Annie-1024x970.jpg">
     </div>
     <div class="subject">
       <span>ANIMALS</span>
     </div>
   </div>
    <div class="item">
     <div class="image">
       <img src="https://www.awanj.org/wp-content/uploads/2022/12/Little-Orphan-Annie-1024x970.jpg">
     </div>
     <div class="subject">
       <span>ANIMALS</span>
     </div>
   </div>
    <div class="item">
     <div class="image">
       <img src="https://www.awanj.org/wp-content/uploads/2022/12/Little-Orphan-Annie-1024x970.jpg">
     </div>
     <div class="subject">
       <span>ANIMALS</span>
     </div>
   </div>
   
  </div>
</div>
</template>
<style scoped>
.content-container {
  width : 1663px;
  position: absolute;
  top: 0;
  right : 0;
} 
.content {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 110px 90px 0px 90px;
  justify-content: space-between;
}
.item {
  width: 401px;
  height: 410px;
  margin-bottom: 90px;
  border-radius: 50px;
  border: 5px solid #4ee70c;
  background-color: rgba(78, 231, 12 , 0.7);;
  align-items: center;
  cursor: pointer;
}

.image {
  height: 300px;
  padding: 20px 20px 0px 20px;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 35px;
}
.subject {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.subject span{
  font-family: 'Geologica', sans-serif;
 font-size: 30px;
  font-weight: 700;
  letter-spacing: .8px;
  text-transform: uppercase;
  color: white;
  background-color: #FFBF00;
  padding: 10px;
  border-radius: 20px;
}
</style>