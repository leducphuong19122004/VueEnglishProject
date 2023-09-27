<template>
    <div class="test-container">
        <div class="information-section">
            <div class="time">
                <img src="https://cdn-icons-png.flaticon.com/512/2997/2997300.png" alt="clock icon">
                <h2> {{ this.clock }}</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/2997/2997300.png" alt="clock icon">
            </div>
            <div class="br">
                <span></span>
            </div>
            <div class="list-answer">
                <div class="single-row-answer" v-for="x in 50" :key="x">
                    <span class="number-question">{{ x }}</span>
                    <div class="box-answer-container">
                        <span class="box-answer" @click="setActive(x, $event)">A</span>
                        <span class="box-answer" @click="setActive(x, $event)">B</span>
                        <span class="box-answer" @click="setActive(x, $event)">C</span>
                        <span class="box-answer" @click="setActive(x, $event)">D</span>
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/512/2814/2814368.png" alt="red flag icon" class="red-flag-icon" @click="setRedflag(x, $event)">
                </div>
            </div>
            <div class="finish-test" @click="showPopupFunction()">
                <span>Nộp bài</span>
            </div>
        </div>
        <div class="content-test-section">
            <iframe :src="pdfUrl" frameborder="0" width="100%" height="100%"></iframe>
        </div>
    </div>
    <div class="finish-popup-container" v-show="showPopup">
            <div class="background-popup"></div>
            <div class="finish-popup">
                <div class="container">
                    <div class="header">
                        <span>Bạn có muốn thay đổi không ?</span>
                    </div>
                    <div class="caution">
                        <span>Bạn có {{ 50 - this.numberAnswer }} câu chưa điền và {{ this.redFlag }} câu đánh dấu</span>
                    </div>
                    <div class="button">
                        <span @click="showPopupFunction()">CÓ</span>
                        <router-link :to="{path: '/exams/test', query: { year: this.year, code: this.code, page: 'summary'}}" style="text-decoration: none;" @click="passAnswer()"><span>KHÔNG</span></router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            clock: '61:00',
            time: {
                min: 61,
                seconds: 0
            },
            timeOut: false,
            answers: [],
            numberAnswer: 0,
            redFlag: 0,
            year: this.$route.query.year,
            code: this.$route.query.code,
            showPopup: false
        }
    },
    computed: {
        pdfUrl() {
            return `/ExamFiles/${this.year}/${this.code}.pdf#toolbar=0&navpanes=0`;
        }
    },
    watch: {
        timeOut: function () {
            const path = 'exams/test?year=' + this.year + '&code=' + this.code + '&page=summary';
            this.$router.push({path: path});
        }
    },
    methods: {
        setActive(number, event) {
            for(let i = 0; i < event.target.parentNode.childNodes.length; i++){
                event.target.parentNode.childNodes[i].className = 'box-answer'
            }
            event.target.className += ' active';
            this.answers[number - 1] = event.target.innerText;
            this.numberAnswer++;
        },
        setRedflag(number, event) {
            if(event.target.src == "https://cdn-icons-png.flaticon.com/512/2814/2814255.png"){ // delete red flag
                event.target.src = "https://cdn-icons-png.flaticon.com/512/2814/2814368.png";
                this.redFlag--;
            }else {
                event.target.src = "https://cdn-icons-png.flaticon.com/512/2814/2814255.png"; // set red flag
                this.redFlag++;
            }
        },
        showPopupFunction() {
            this.showPopup = !this.showPopup;
        },
        passAnswer() {
            this.$emit("passAnswer", this.answers);
        }
    },
    mounted() {
        let sumSeconds = 61*60;
        let intervalId = setInterval(()=>{
            if(sumSeconds == 0){
                clearInterval(intervalId);
                this.timeOut = true;
            }else {
                sumSeconds--;
                this.time.min = Math.floor(sumSeconds / 60);
                this.time.seconds = Math.floor(sumSeconds % 60);
                if(this.time.seconds <= 9){
                    this.clock = this.time.min + ':' + '0' + this.time.seconds
                }else if(this.time.min <= 9) {
                    this.clock = '0' + this.time.min + ':' + this.time.seconds
                }else {
                    this.clock = this.time.min + ':' + this.time.seconds
                }
            }
        }, 1000)
    },
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Geologica&display=swap');
* {
    box-sizing: border-box;
    margin: 0px;
}

.test-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
}
.information-section {
    width: 500px;
    height: 750px;
    /* border: solid 2px #4ee70c; */
    margin: 0px 20px 100px 0px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px #0000001a;
    border-radius: 10px;
    position: relative;
    text-align: center;
}
.br span {
    height: 2px;
    width: 100%;
    background-color: #C0C0C0;
    display: block;
}
.time {
    margin-bottom: 10px;
}
.list-answer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    overflow-y: scroll;
    height: 75%;
}

.single-row-answer {
    display: flex;
    text-align: center;
    margin-bottom: 10px;
}
.number-question {
    font-family: 'Anton', sans-serif;
    font-size: 25px;
    /* padding-left: 10px; */
    width: 25px;
}
.box-answer-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.box-answer {
    padding: 10px;
    border: solid 1px black;
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
}
.red-flag-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.time {
    display: flex;
    justify-content: center;
    align-items: center;
}
.time h2 {
    font-size: 40px;
    font-family: 'Anton', sans-serif;
    display: inline-block;
    margin: 0px 15px 0px 15px;
    letter-spacing: 5px;
}
.time img {
    width: 40px;
}
.content-test-section {
    height: 100%;
    width: 70%;
    background-color: #fff;
    box-shadow: 0 2px 4px #0000001a;
}
.content-test-section embed {
    width: 100%;
    height: 100%;
}
.finish-test {
    text-align: center;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
}
.finish-test span {
    padding: 15px;
    font-family: 'Geologica', sans-serif;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    color: white ;
    background-color: #4ee70c;
    box-shadow: 0 4px #0a9d25;
    border-radius: 20px;
    cursor: pointer;
}
.finish-test span:hover {
    opacity: 0.9;
}
.active {
    background-color: rgb(255,165,0);
}

/* style fot popup */
.finish-popup-container {
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
    z-index: 1;
    background-color: #090909cc;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.finish-popup {
    width: 688px;
    border-radius: 20px;
    background-color: #fff;
    z-index: 2;
}
.header {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 40px;
    font-family: 'Geologica', sans-serif;
}
.caution {
    text-align: center;
    font-size: 20px;
    color: red;
    font-family: 'Geologica', sans-serif;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 20px 0px;
}
.button span {
    width: 100px;
    height: 55px;
    background-color: #4ee70c;
    box-shadow: 0 4px #0a9d25;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    font-family: 'Geologica', sans-serif;
    letter-spacing: .8px;
    cursor: pointer;
    font-weight: 700;
    color: white ;
    font-size: 17px;
    margin: 0px 20px 0px 20px;
    display: block;
}
.button span:hover {
    opacity: 0.8;
}
</style>