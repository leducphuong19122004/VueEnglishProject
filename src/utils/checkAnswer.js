import correct_answer from '../../public/ExamAnswerFiles/2023/401.json';

export const checkAnswer = (answers) => {
    let number = 0;
    let scoreObj = {score : 0};
    let dataAfterChecked = [];
    for(let i = 0; i < correct_answer.length; i++) {
        const obj = {};
        // if a question has answer, not blank
        if(answers[`${i}`]) {
            // if this answer is true
            if (answers[`${i}`] == correct_answer[i]) {
                obj.number = ++number;
                obj.trueAnswer = correct_answer[i];
                obj.falseAnswer = null;
                dataAfterChecked.push(obj);
                scoreObj.score += 0.2;
            }else {
                obj.number = ++number;
                obj.trueAnswer = correct_answer[i];
                obj.falseAnswer = answers[`${i}`];
                dataAfterChecked.push(obj);
            }
        }else {
            obj.number = ++number;
            obj.trueAnswer = null;
            obj.falseAnswer = correct_answer[i];
            dataAfterChecked.push(obj);
        }
    }
    dataAfterChecked.push(scoreObj);
    return dataAfterChecked;
}