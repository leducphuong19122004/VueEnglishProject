<template>
    <div class="content">
  <div class="list-title">
    <img src="https://cdn-icons-png.flaticon.com/512/4033/4033369.png" alt="">
    <h2>Từ vựng cấp {{ level }}</h2>
    <img src="https://cdn-icons-png.flaticon.com/512/4033/4033369.png" alt="">
  </div>
<div class="list-container">
  <div class="info-box">
    <div class="progress-box">
    5/753 từ đã học
    <span>0 bỏ qua</span>
    <div class="progress-bar">
      <div class="progress-level"></div>
    </div>
  </div>
    <div class="button-box">
      <button>Tùy chọn<i class='bx bx-chevron-down'></i></button>
      <div>
        <button style="margin-right: 10px;">Ôn tập</button>
        <button>Học</button>
      </div>
    </div>
  </div>
  <div class="vocabulary-list">
    <div class="list-header"></div>
    <div class="list">
      <div class="row-title">
        <div class="eng-word-title title">Từ mới</div>
        <div class="ipa-title title">Phiên âm</div>
        <div class="mean-title title">Nghĩa</div>
        <div class="pronoun-title title">Phát âm</div>
      </div>
      <div class="row" v-for="data in vocabularyList" :key="data.vocabulary">
        <div class="eng-word cell">{{ data.vocabulary }}</div>
        <div class="ipa cell">{{ data.ipa }}</div>
        <div class="mean cell">{{ data.mean }}</div>
        <div class="pronoun cell" @click="playAudio( data.vocabulary )">
            <i class='bx bxs-volume-full'></i>
        </div>
        <div class="mark cell">
          <input type="checkbox">
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
  import vocabulary_1 from '../../../public/voccabulary/vocabulary-level-1.json';
  import vocabulary_2 from '../../../public/voccabulary/vocabulary-level-2.json';
  import vocabulary_3 from '../../../public/voccabulary/vocabulary-level-3.json';
  import vocabulary_4 from '../../../public/voccabulary/vocabulary-level-4.json';

  export default {
    data() {
      return {
        vocabularyList : null,
        level : this.$route.params.id
      }
    },
    methods : {
      playAudio(name) {
        const src = process.env.VUE_APP_DOMAIN_NAME + 'audio' + '/audio-' + this.level + '/' + name + '.wav';
        const audio = new Audio(src);
        audio.play();
      }
    },
    mounted() {
      if(this.$route.params.id == 1) {
        this.vocabularyList = vocabulary_1;
      }else if (this.$route.params.id == 2) {
        this.vocabularyList = vocabulary_2;
      }else if (this.$route.params.id == 3) {
        this.vocabularyList = vocabulary_3;
      }else if (this.$route.params.id == 4) {
        this.vocabularyList = vocabulary_4;
      }
    },
  }
</script>
<style scoped>
    .content {
  height: 100vh;
  width : 1663px;
  position: absolute;
  top: 0;
  right : 0;
}


.list-container {
  width: 940px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.info-box {
  border: 4px solid #4ee70c;
  border-radius: 20px;
  padding: 30px;
  background-color: white;
  margin-bottom: 40px;
}
.progress-box {
  font-family: din-round,sans-serif;
  font-size: 20px;
}
.progress-box span {
  float: right;
}

.progress-bar {
  border: 2px solid #4ee70c;
  height: 20px;
  border-radius: 10px;
  margin-top: 10px;
}
.progress-level {
  width: 25%;
  height: 20px;
  border-radius: 10px;
  background-color: rgb(255,165,0)
}

.button-box {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.button-box button {
  border: none;
  background-color:  #4ee70c;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 650;
}

.list-title h2 {
  display: inline;
   font-family: 'Geologica', sans-serif;
  font-size: 30px;
    margin-left: 10px;
    margin-right: 10px;
}
.list-title img {
  width: 30px;
}
.list-title {
  margin: 30px 0px 30px 0px;
  text-align: center;
}
.row {
  border-top: 1px solid #e4e4e4;
  padding: 10px 15px 10px 18px;
  font-size: 20px;
  font-family: din-round,sans-serif;
}

.eng-word-title {
    width: 30%;
}
.ipa-title {
  width: 25%;
}
.mean-title {
  width: 30%;
}
.pronoun-title {
}

.title {
  vertical-align: top;
  text-align: left;
  display: inline-block;
}
.row-title {
  padding: 10px 15px;
  font-size: 20px;
  font-family: din-round,sans-serif;
  border: 3px solid #e4e4e4;
  font-weight: bold;
}
.eng-word {
  width: 30%;
  font-weight: bold;
}
.ipa {
  width: 25%;
}
.mean {
  width: 33%;
}
.cell {
  vertical-align: top;
  text-align: left;
  display: inline-block;
}
.mark {
  width: 1%;
}
.pronoun {
    width: 8%;
    cursor: pointer;
}

.vocabulary-list {
  padding-bottom: 40px;
}
</style>