<template>
    <div class="side-bar">
        <div class="logo">VueEnglish</div>
        <div class="items-container">
            <router-link to="/">
                <span class="item-container" :class="{active : activeElement === '/'}">
                    <div class="icon-item">
                        <i class='bx bxs-home-circle' style='color:#4ee70c; font-size: 40px'></i>
                    </div>
                    <span>Home</span>
                </span>
            </router-link>
            <router-link to="/vocabulary">
                <span class="item-container" :class="{active : activeElement === '/vocabulary'}">
                    <div class="icon-item">
                        <i class='bx bxs-book-bookmark' style='color:#4ee70c; font-size: 40px' ></i>
                    </div>
                    <span>Vocabulary</span>
                </span>
            </router-link>
            <router-link to="/grammar">
                <span class="item-container" :class="{active : activeElement === '/grammar'}">
                    <div class="icon-item">
                        <i class='bx bxs-edit-alt'  style='color:#4ee70c; font-size: 40px'></i>
                    </div>
                    <span>Grammar</span>
                </span>
            </router-link>
            <router-link to="/exams">
                <span class="item-container" :class="{active : activeElement === '/exams'}">
                    <div class="icon-item">
                        <i class='bx bxs-graduation' style='color:#4ee70c; font-size: 40px'></i>
                    </div>
                    <span>Exams</span>
                </span>
            </router-link>
            <a class="more-container">
                <span class="item-container">
                    <div class="icon-item">
                        <i class='bx bx-dots-horizontal-rounded bx-rotate-90' style='color:#4ee70c; font-size: 40px'></i>
                    </div>
                    <span>More</span>
                </span>
                <div class="popup-container">
                    <div class="">
                      <a href="" class="popup-item">
                        <i class='bx bx-user-circle' style='color:#4ee70c; font-size: 40px'></i>
                        <span>PROFILE</span>
                      </a>
                      <a href="" class="popup-item">
                        <i class='bx bxs-cog' style='color:#4ee70c; font-size: 40px'></i>
                        <span>SETTING</span>
                      </a>
                      <a href="" class="popup-item">
                        <i class='bx bxs-help-circle' style='color:#4ee70c; font-size: 40px'></i>
                        <span>HELP</span>
                      </a>
                      <a href="" class="popup-item">
                        <i class='bx bx-log-in' style='color:#4ee70c; font-size: 40px'></i>
                        <span>LOG OUT</span>
                      </a>
                    </div>
                  </div>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data(){
            return {
                activeElement : this.$route.matched[0].path,
            }
        },
        computed: {
            ...mapState([
                'login'
            ])
        }
    }
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

.side-bar{
    height: 100vh;
    width: 222px;
    border-right: 3px solid #B2BABB;
    padding: 0px 16px 0px 16px;
    position: fixed;
    z-index: 9999;
    background-color: white;
}

.logo{
    font-family: 'Cherry Bomb One', cursive;
    font-size: 35px;
    padding: 20px 0px 20px 0px;
    text-align: center;
}

.items-container{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item-container{
    display: flex;
    height: 40px;
    padding: 4px 8px 4px 8px;
    margin: 2px;
    align-items: center;
    border-radius: 10px;
}

.item-container:hover{
    background-color:  #EAEDED;
}

.item-container i {
    margin-right: 20px;
}

.item-container span {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    color: #797D7F ;
    font-family: 'Geologica', sans-serif;

}

a{
    text-decoration: none;
}

.active {
    border: 2px solid #4ee70c;
    background-color: #D5F5E3 !important;
}

.more-container:hover + .popup-container {
    display: block;
}

.popup-container:hover {
    display: block;
}

.popup-container {
    width: 230px;
    border-radius: 20px;
    border: 2px solid #B2BABB;
    position: fixed;
    left: 230px;
    top: 316px;
    z-index: 9999;
    transform: none;
    background-color: white;
    display: none;
  }
  
  .popup-container div {
    padding: 20px 0px 20px 0px;
  }
  .popup-item{
    display: flex;
    padding: 0px 20px 0px 20px;
    height : 40px;
    align-items: center;
    gap: 20px;
    
  }
  
  .popup-item:hover{
    background-color: #EAEDED;
  }
  
  .popup-item span {
     font-family: 'Geologica', sans-serif;
     font-size: 15px;
      font-weight: 700;
      letter-spacing: .8px;
      text-transform: uppercase;
      color: #797D7F ;
  }
  
  .popup-item{
    padding-bottom: 5px;
    padding-top: 5px;
  }
</style>