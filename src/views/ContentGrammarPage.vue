<template>
     <div class="content-container">
        <div class="intro-container">
        <img src="https://cdn-icons-png.flaticon.com/512/9321/9321635.png">
        <h1>Lý thuyết</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/9321/9321635.png">
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
        <div class="practice-button">
        <a href="">Bài tập</a>
        </div>
        <div class="pagination-container">
        <div class="back-button" @click="changePagination(0)"><img width="64" height="64" src="../../public/Icon/back-button.png" alt="previous"/></div>
        <div class="number-page">
            <span v-for="x in pages" :key="x" @click="redirectPage(x)" v-bind:class="{active: x === this.current_page}">{{ x }}</span>
        </div>
        <div class="next-button" @click="changePagination(1)"><img width="64" height="64" src="../../public/Icon/next-button.png" alt="next"/></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
             current_page:  parseInt(this.$route.path[16]),
             max_pages: 0,
             min_pages: 0
        }
    },
    computed: {
        pages(){
            let arr_pages = [];
            if(this.min_pages == 9){
                for(let x = 9;x <= 13; x++){
                    arr_pages.push(x);
                }
            }else {
                let x = this.min_pages;
                for(; x <= this.max_pages; x++){
                    arr_pages.push(x);
                }
            }
            return arr_pages;
        }
    },
    mounted() {
        if(this.current_page > 9){
            this.min_pages = 9;
            this.max_pages = 13;
        }else {
            this.min_pages = this.current_page;
            this.max_pages = this.current_page + 4;
        }
    },
    methods: {
        changePagination(x){
            if(x == 0){
                if(this.min_pages > 1){
                    this.min_pages--;
                    this.max_pages--;
                }
            }else {
                if(this.max_pages < 13){
                    this.max_pages++;
                    this.min_pages++;
                }
            }
        }, 
        redirectPage(x){
            window.location.href = "/grammar/lesson/" + x;
        }
    },
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
  .main-content {
    padding: 30px 30px 30px 40px;
    font-family: din-round,sans-serif;
    font-size: 25px;
  }

  /* pagination */
  .pagination-container {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .number-page span {
    font-family: 'Geologica', sans-serif;
    font-size: 25px;
    font-weight: 700;
    padding: 4px 10px 4px 10px;
    margin: 0px 5px 0px 5px;
    border: solid 2px #4ee70c;
    border-radius: 10px;
    cursor: pointer;
    max-width: 30px;
    max-height: 30px;
    color: #989fa0;
  }
  .practice-button {
    text-align: center;
    margin-bottom: 30px;
  }
  .practice-button a {
    text-decoration: none;
    font-family: 'Geologica', sans-serif;
    font-size: 25px;
    color: white;
    font-weight: 700;
    letter-spacing: .8px;
    /* border: solid 2px #4ee70c; */
    background-color: #4ee70c;
    box-shadow: 0 4px #0a9d25;
    border-radius: 20px;
    padding: 10px;
  }
  .practice-button a:hover {
    opacity: 0.8;
  }
  .back-button,
  .next-button {
    cursor: pointer;
  }
  .active {
    background-color: rgb(255,165,0);
  }
</style>