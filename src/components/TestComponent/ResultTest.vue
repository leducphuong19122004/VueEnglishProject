<template>
    <div class="summary-container">
        <div class="header-container">
            <h1>Đề thi thpt quốc gia môn tiếng anh năm 2023 mã đề 401</h1>
        </div>
        <div class="content-container">
            <div class="result-section">
                <div class="user-info-container">
                    <div class="avatar">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3vQS5rPzPzhC2Ao79BzvSIqcWNj_xnq1tg&usqp=CAU" alt="avatar">
                    </div>
                    <div class="name-user">
                        <span>Le Duc Phuong</span>
                    </div>
                    <div class="function-buttons">
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54910.png" alt="share button">
                    </div>
                </div>
                <div class="result-container">
                    <div class="score-container">
                        <div class="score-text">
                            <h3>Điểm số</h3>
                            <h3>{{ result[50].score }} / 10</h3>
                        </div>
                        <div class="logo-score">
                            <img src="https://cdn-icons-png.flaticon.com/512/5432/5432626.png" alt="score-icon">
                        </div>
                    </div>
                    <div class="rank-container">
                        <div class="rank-text">
                            <h3>Thứ hạng</h3>
                            <h3>85 / 100</h3>
                        </div>
                        <div class="logo-rank">
                            <img src="https://cdn-icons-png.flaticon.com/512/10550/10550743.png" alt="rank icon">
                        </div>
                    </div>
                </div>
                <div class="buttons-container">
                    <div class="restart-button">Bắt đầu lại</div>
                    <div class="back-homepage-button">Quay về trang chủ</div>
                </div>
                <div class="answer-container">
                    <div class="title-answer-container">Xem lại các câu trả lời và đáp án</div>
                    <div class="question-review-list">
                        <div class="single-row-answer" v-for="number in 50" :key="number">
                            <div class="number-question">{{ number }}</div>
                            <div class="box-answer-container">
                                <span class="box-answer">A</span>
                                <span class="box-answer">B</span>
                                <span class="box-answer">C</span>
                                <span class="box-answer">D</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-other-exams-section">
                    <div class="title-list">Những bài thi khác...</div>
                    <div class="list-container">
                        <div class="box-exam">
                            <div class="img-exam"></div>
                            <div class="info-other-exam">
                                <div class="name-exam">Đề thi THPT quốc gia năm 2021 mã đề 401</div>
                                <div class="sub-text">Đã có 255 lượt làm</div>
                            </div>
                        </div>
                        <div class="box-exam">
                            <div class="img-exam"></div>
                            <div class="info-other-exam">
                                <div class="name-exam">Đề thi THPT quốc gia năm 2021 mã đề 401</div>
                                <div class="sub-text">Đã có 255 lượt làm</div>
                            </div>
                        </div>
                        <div class="box-exam">
                            <div class="img-exam"></div>
                            <div class="info-other-exam">
                                <div class="name-exam">Đề thi THPT quốc gia năm 2021 mã đề 401</div>
                                <div class="sub-text">Đã có 255 lượt làm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['result'],
    mounted() {
        console.log(this.result);
    }
}
</script>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Geologica&display=swap');
    * {
        margin: 0;
        box-sizing: border-box;
    }
    .summary-container {
        width: 100%;    
        height: 100%;
        background-color: #e1fee2;
    }
    .header-container h1 {
        text-align: center;
        text-transform: uppercase;
        padding: 40px 0px 30px 0px;
        font-family: 'Geologica', sans-serif;
    }
    .content-container {
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 30px;
    }
    .result-section {
        position: relative;
        margin: 0 auto;
        max-width: 528px;
        background-color: #be318c;
        height: 100%;
        border-radius: 20px;
        padding: 24px 15px;
    }
    .user-info-container {
        background-color: #a6f2c1;
        width: 100%;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
    }
    .avatar img {
        vertical-align: middle;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
    .function-buttons img {
        width: 30px;
        cursor: pointer;
    }
    .name-user {
        font-size: 25px;
        width: 100%;
        padding: 0px 0px 0px 20px;
        font-weight: 700;
        letter-spacing: .8px;
        text-transform: uppercase;
        color: black ;
        font-family: 'Geologica', sans-serif;
    }
    .function-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .result-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .score-container,
    .rank-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #a6f2c1;
        border-radius: 20px;
        padding: 10px 0px;
        font-family: 'Geologica', sans-serif;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: .8px;
        text-transform: uppercase;
        color: black ;
    }
    .score-container {
        margin-right: 10px;
    }
    .rank-container {
        margin-left: 10px;
    }
    .result-container img {
        width: 70px;
    }

    .buttons-container div {
        background-color: #a6f2c1;
        border-radius: 15px;
        padding: 15px;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        margin-bottom: 15px;
        font-family: 'Geologica', sans-serif;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: .8px;
        text-transform: uppercase;
        color: black ;
        background-color: #a6f2c1;
        box-shadow: 0 4px #44e77d;
    }
    .buttons-container div:hover {
        opacity: 0.9;
    }

    .title-answer-container {
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
        font-family: din-round,sans-serif;
    }
    .answer-container {
        margin-top: 20px;
    }
    .question-review-list{
        background-color: white;
        border-radius: 10px;
        padding: 20px 10px 10px 10px;
    }
    .single-row-answer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .box-answer-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .box-answer {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: din-round,sans-serif;
    }
    .number-question {
        width: 25px;
        font-size: 25px;
        font-family: 'Anton', sans-serif;
    }
    .list-other-exams-section {
        position: absolute;
        top: 0;
        left: calc(100% + 20px);
        width: 350px;
        background-color: #be318c;
        border-radius: 20px;
        padding: 10px 20px;
    }
    .img-exam {
        background-image: url("https://prep.vn/blog/wp-content/uploads/2023/03/de-minh-hoa-tieng-anh-thpt-quoc-gia-2023-1-scaled.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 80px;
        height: 80px;
        border-radius: 10px;
    }
    .title-list {
        font-size: 20px;
        margin: 10px 0px 20px 0px;
        font-family: din-round,sans-serif;
    }
    .box-exam {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .box-exam:hover {
        color: white;
    }
    .name-exam {
        word-break: break-all;
        font-size: 18px;
        margin-bottom: 5px;
        font-weight: 500;
    }
    .info-other-exam {
        margin-left: 10px;
        font-family: din-round,sans-serif;
    }
    .wrong-answer {
        background-color: #FF0000;
    }
    .true-answer {
        background-color: #00FF00;
    }
</style>