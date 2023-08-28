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
                    <img src="https://cdn-icons-png.flaticon.com/512/2814/2814368.png" alt="red flag icon" class="red-flag-icon" @click="setRedflag">
                </div>
            </div>
            <div class="finish-test" @click="finishTest()">
                <span>Nộp bài</span>
            </div>
        </div>
        <div class="content-test-section">
            <iframe :src="pdfUrl" frameborder="0" width="100%" height="100%"></iframe>
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
            year: this.$route.query.year,
            code: this.$route.query.code,
        }
    },
    computed: {
        pdfUrl() {
            return `/ExamFiles/${this.year}/${this.code}.pdf#toolbar=0&navpanes=0`;
        }
    },
    methods: {
        setActive(number, event) {
            for(let i = 0; i < event.target.parentNode.childNodes.length; i++){
                event.target.parentNode.childNodes[i].className = 'box-answer'
            }
            event.target.className += ' active';
            this.answers[number - 1] = event.target.innerText;
        },
        setRedflag(event) {
            if(event.target.src == "https://cdn-icons-png.flaticon.com/512/2814/2814255.png"){
                event.target.src = "https://cdn-icons-png.flaticon.com/512/2814/2814368.png";
            }else {
                event.target.src = "https://cdn-icons-png.flaticon.com/512/2814/2814255.png";
            }
        },
        finishTest() {

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
</style>