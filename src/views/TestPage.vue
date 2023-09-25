<template>
    <component :is="view" @passAnswer="passAnswer($event)" :result="this.result"/>
</template>
<script>
import ExamQuestion from '../components/TestComponent/ExamQuestion'
import ResultTest from '../components/TestComponent/ResultTest'
import {checkAnswer} from '../utils/checkAnswer'

export default {
    components: {
        ExamQuestion,
        ResultTest
    },
    data() {
        return {
            view: null,
            result: {}
        }
    },
    watch: {
        $route (to) {
            if(to.query.page == "summary") {
                this.view = 'ResultTest';
            }
        }
    },
    mounted() {
        const year = this.$route.query.year;
        const code = this.$route.query.code;
        const fullPath = "/exams/test?year=" + year + "&code=" + code;
        if(this.$route.fullPath == fullPath){
            this.view = 'ExamQuestion';
        }
    },
    methods: {
        passAnswer(answers) {
           const result = checkAnswer(answers);
           this.result = result;
        }
    }
}
</script>